/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchApi } from '../apis/fetchApi';
import { LoadingBox, SearchForm } from '../components/index.js';

function Search(props) {
	const [loading, setLoading] = useState(false);
	const [list, setList] = useState();

	const handleSubmit = async (query) => {
		setLoading(true);
		const data = await fetchApi(query);
		setList(data);
		setLoading(false);
	};

	return (
		<>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : (
				<div className="container-box">
					<div className="container pt-2">
						<div className="box">
							<SearchForm onFormSubmit={handleSubmit} />
							{list &&
								(list.length === 0 ? null : (
									<div className="container- mt-5">
										<div className="video-box">
											<ul className="">
												{list.map((item) => (
													<li className="media-list" key={item.id}>
														<div className="row">
															<div className="col-md-5">
																<Link
																	to={{
																		pathname: '/video',
																		state: { video: item }
																	}}
																>
																	<img
																		className="mb-2 mr-3 thumbnail"
																		src={item.bestThumbnail.url}
																		alt="Generic placeholder"
																	/>
																	<small className="video-duration">
																		{item.duration}
																	</small>
																</Link>
															</div>
															<div className="col-md-7">
																<div className="media-body">
																	<p className="mt-0 mb-1">
																		<b>{item.title}</b>
																	</p>
																	<span className="">
																		{item.views} views
																	</span>
																	<span className="m-2">&#8226;</span>
																	<span className="">
																		{item.uploaded_at}
																	</span>
																	<p className="mt-3 mb-3">
																		{item.author.name}
																	</p>
																	<p className="mt-0 mb-1 media-description">
																		{item.description}
																	</p>
																</div>
															</div>
														</div>
													</li>
												))}
											</ul>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Search;
