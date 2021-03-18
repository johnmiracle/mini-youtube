/** @format */

import React, { useState } from 'react';
import { fetchApi } from '../apis/fetchApi';
import { LoadingBox, SearchForm } from '../components';

function VideoPlay(props) {
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (query) => {
		setLoading(true);
		const data = await fetchApi(query);
		props.history.push('/video_list', data);
		setLoading(false);
	};

	const { video } = props.location.state;
	const videoSrc = `https://www.youtube.com/embed/${video.id}`;

	return (
		<>
			<div className="container">
				<div className="mt-3 mb-3">
					{loading ? (
						<LoadingBox></LoadingBox>
					) : (
						<>
							<SearchForm onFormSubmit={handleSubmit} />
							<div className="embed-responsive embed-responsive-21by9 mt-5 mb-3">
								<iframe
									className="embed-responsive-item"
									src={videoSrc}
									title={video.title}
									allowFullScreen
								></iframe>
							</div>
							<h6 className="">{video.title}</h6>
							<span>{video.views}</span>
							<span className="m-2">&#8226;</span>
							<span>{video.uploaded_at}</span>
							<p>{video.description}</p>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default VideoPlay;
