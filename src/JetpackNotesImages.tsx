import React from "react";

export const JetpackNotesImages = () => {

	const notesProjectImage01 = require("./images/list page - blue.png");
	const notesProjectImage02 = require("./images/list page - green-blue.png");
	const notesProjectImage03 = require("./images/list screen - burnt orange.png");
	const notesProjectImage04 = require("./images/light theme - list page.png");
	const notesProjectImage05 = require("./images/light theme - list page - blue.png");
	const notesProjectImage06 = require("./images/list screen - tablet 7.png");
	const notesProjectImage07 = require("./images/tablet 7 - add note screen.png");

	return (
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
			<a href="https://play.google.com/store/apps/details?id=com.samm.space">
				<img
					alt=""
					className="project-image01"
					src={notesProjectImage04}
					height={500}
					style={{ padding: '25px' }}
				/>
			</a>
			<a href="https://play.google.com/store/apps/details?id=com.samm.space">
				<img
					alt=""
					className="project-image01"
					src={notesProjectImage05}
					height={500}
					style={{ padding: '25px' }}
				/>
			</a>
			<a href="https://play.google.com/store/apps/details?id=com.samm.space">
				<img
					alt=""
					className="project-image01"
					src={notesProjectImage06}
					height={500}
					style={{ padding: '25px' }}
				/>
			</a>
			<a href="https://play.google.com/store/apps/details?id=com.samm.space">
				<img
					alt=""
					className="project-image01"
					src={notesProjectImage07}
					height={500}
					style={{ padding: '25px' }}
				/>
			</a>
		</div>
	)
}
