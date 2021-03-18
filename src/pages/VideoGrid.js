/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchApi } from '../apis/fetchApi';
import { LoadingBox, SearchForm } from '../components';

function VideoGrid(props) {
	let data = props.location.state;
	const [loading, setLoading] = useState(false);
	const [list, setList] = useState(data);

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
				<div className="container">
					<div className="videogrid-search-box">
						<SearchForm onFormSubmit={handleSubmit} />
					</div>
					<ul className="video-list mt-3">
						{list &&
							(list.length === 0 ? null : (
								<>
									{list.map((item) => (
										<li className="mb-2" key={item.id}>
											<Link
												to={{
													pathname: '/video',
													state: { video: item }
												}}
											>
												<div className="row">
													<div className="col-md-5">
														<div className="">
															<img
																className="mb-2 mr-3 video-grid-thumbnail"
																src={item.bestThumbnail.url}
																alt="Generic placeholder"
															/>
															<small className="video-duration">
																{item.duration}
															</small>
														</div>
													</div>
													<div className="col-md-7">
														<div className="video-detail-list">
															<h6 className="">{item.title}</h6>
															<span>{item.views}</span>
															<span className="m-2">&#8226;</span>
															<span>{item.uploaded_at}</span>
															<h6 className="mt-3"> {item.author.name}</h6>
															<p className="mt-2 video-grid-desc">
																{item.description}
															</p>
														</div>
													</div>
												</div>
											</Link>
										</li>
									))}
								</>
							))}
					</ul>
				</div>
			)}
		</>
	);
}

export default VideoGrid;
