import React from 'react';
import Projects from "./Projects";
import {ProfilePicture} from "./ProfilePicture";
import {AboutMe} from "./AboutMe";

const About: React.FC = () => {
	return (
		<div className="portfolio-page">
			<div className="content">
				<h1 className="name-heading">Samuel Morton</h1>
				<div className="info-container">
					<ProfilePicture/>
					<AboutMe/>
				</div>
			</div>
			<Projects/>
		</div>
	);
};
export default About;
