import React from "react";

export const SpaceExplorerVideos = () => {

	const video01 = require("./videos/filtering-library-video.webm");
	const video02 = require("./videos/search-library-video.webm");

	return (
		<div className="videos">
			<video className={"space-explorer-video"} controls={true}>
				<source src={video02} type="video/webm"/>
			</video>
			<video className={"space-explorer-video"} controls={true}>
				<source src={video01} type="video/webm"/>
			</video>
		</div>
	)
}
