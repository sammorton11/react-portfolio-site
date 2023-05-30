import React from 'react';

const About: React.FC = () => {

	const deviceImage03 = require("./images/device_image_03.png");
	const deviceImage04 = require("./images/device_image_04.png");
	const deviceImage08 = require("./images/device_image_08.png");

	const deviceImage10 = require("./images/device_image_10.png");
	const deviceImage11 = require("./images/device_image_11.png");
	const deviceImage12 = require("./images/device_image_12.png");
	const deviceImage13 = require("./images/device_image_13.png");
	const deviceImage14 = require("./images/device_image_14.png");

	const tablet01 = require("./images/7 in tablet 01.png");
	const tablet02 = require("./images/7 in tablet 02.png");
	const tablet04 = require("./images/7 in tablet 04.png");
	const tablet05 = require("./images/10 in tablet 01.png");
	const tablet06 = require("./images/10 in tablet 03.png");

	const video01 = require("./videos/filtering-library-video.webm");
	const video02 = require("./videos/search-library-video.webm");

	const notesProjectImage01 = require("./images/list page - blue.png");
	const notesProjectImage02 = require("./images/list page - green-blue.png");
	const notesProjectImage03 = require("./images/list screen - burnt orange.png");


	return (
		<div className="portfolio-page">
			<div className="content">

				<h1 className="name-heading">Samuel Morton</h1>

				<div className="info-container">
					<img alt="" className="profile-picture"
						 src="https://media.licdn.com/dms/image/D5603AQEECw3jcOuwBA/profile-displayphoto-shrink_400_400/0/1673225792546?e=1690416000&v=beta&t=J3CMF-I4-jKd11bsG7V0wb7O0zwIjMeuzBX3xRTch78"/>
					<div className="about-me-container">
						<h2>About</h2>
						<div className="about-me-grid">
							<div className="about-me-item">
								<p>As an accomplished Android developer with a strong affinity for
									Kotlin, I've immersed myself in an array of exciting projects that showcase my
									expertise. While Android development is my primary focus, I'm always eager to explore
									other platforms like iOS, Flutter, and React.
								</p>
								<p>Whether I'm diving into Android and Kotlin or experimenting with React and JavaScript,
									the joy I find in coding knows no bounds. I'm an eternal student,
									constantly seeking new knowledge. Most of my days are spent programming, but I also
									make sure to carve out time to enjoy the company of my wonderful girlfriend, Maty,
									and our two adorable cats, Barb and Sox.</p>
							</div>
							<div className="about-me-item">
								<p>My journey into software development began after pursuing a degree in
									audio engineering at the University of Central Oklahoma. Eight years later, I discovered
									the captivating world of software development. Although I've
									been programming for nearly two years, my passion and dedication have accelerated my
									growth. I dedicate around six hours each day to programming because,
									I find it incredibly enjoyable and fulfilling.</p>
								<p>Currently, I am working as a Software QA Tester in the Accessibility Department at
									Quality Logic, but my heart is set on transitioning into software development. While I'm
									primarily self-taught, I did spend a few months in school pursuing a computer science
									degree. Surprisingly, I already possessed a solid foundation in many of the concepts
									covered, including basic data structures and algorithms.</p>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="project-details-container">
				<div className="project-details">
					<h2>Space Explorer</h2>
					<p>
						Space Explorer is my best and latest Android application built using Kotlin and Jetpack Compose.
						It allows users to explore space related resources and information provided by NASA through
						various APIs.
					</p>
					<a href="https://play.google.com/store/apps/details?id=com.samm.space">Play Store</a>
				</div>

				<div className="projects">

					<div className="images">
						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={deviceImage08}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={deviceImage14}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={deviceImage11}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={deviceImage03}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={deviceImage14}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={deviceImage10}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={deviceImage04}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={deviceImage13}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={deviceImage12}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>

						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={tablet01}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>

						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={tablet02}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={tablet04}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={tablet05}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.samm.space">
							<img
								alt=""
								className="project-image01"
								src={tablet06}
								height={500}
								style={{ padding: '25px' }}
							/>
						</a>
					</div>

					<div className="videos">
						<video className={"space-explorer-video"} controls={true}>
							<source src={video02} type="video/webm"/>
						</video>
						<video className={"space-explorer-video"} controls={true}>
							<source src={video01} type="video/webm"/>
						</video>
					</div>



					<div className="project-details-container">
						<div className="project-details">
							<h2>Jetpack Notes</h2>
							<p>
								Simple Todo List application built using Jetpack Compose, Kotlin, and SQLite.
							</p>
							<a href="https://play.google.com/store/apps/details?id=com.samm.space">Play Store</a>
						</div>

						<div className="projects">
							<div className="images">
								<a href="https://play.google.com/store/apps/details?id=com.samm.space">
									<img
										alt=""
										className="project-image01"
										src={notesProjectImage01}
										height={500}
										style={{ padding: '25px' }}
									/>
								</a>

								<a href="https://play.google.com/store/apps/details?id=com.samm.space">
									<img
										alt=""
										className="project-image01"
										src={notesProjectImage02}
										height={500}
										style={{ padding: '25px' }}
									/>
								</a>

								<a href="https://play.google.com/store/apps/details?id=com.samm.space">
									<img
										alt=""
										className="project-image01"
										src={notesProjectImage03}
										height={500}
										style={{ padding: '25px' }}
									/>
								</a>
							</div>
						</div>
					</div>



					<div className="skills-container">
						<h2>Skills</h2>
						<p>Kotlin - Jetpack Compose - MVVM - Flow - Live Data - Ktor - KMM</p>
						<p>Retrofit - Automation Tests - Mock Web Server - Design Patterns</p>
						<p>Clean Architecture - Coroutines - Firebase - MongoDB - Dagger Hilt</p>
						<p>SQLite - Room - React - Javascript - Flutter - Dart</p>
					</div>

				</div>

			</div>
		</div>

	);
};

export default About;
