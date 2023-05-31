import React from 'react';
import {Skills} from "./Skills";
import {SpaceExplorerImages} from "./SpaceExplorerImages";
import {SpaceExplorerVideos} from "./SpaceExplorerVideos";
import {JetpackNotesImages} from "./JetpackNotesImages";
import {SpaceExplorerDetails} from "./SpaceExplorerDetails";
import {JetpackNotesDetails} from "./JetpackNotesDetails";
const Projects= () => {
	// Add your component code here
	return (
		<div className="project-details-container">
			<div className="projects">
				<Skills/>
				<SpaceExplorerDetails/>
			    <SpaceExplorerImages/>
				<SpaceExplorerVideos/>
				<JetpackNotesDetails/>
				<JetpackNotesImages/>
			</div>
		</div>
	);
};

export default Projects;
