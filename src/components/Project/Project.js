import React from 'react';
import './Project.css';

export default (props) => {
	const { 
		name, 
		description, 
		image, 
		icons, 
		url, 
		github 
	} = props;

	return (
		<section className='project' key={name}>
			<a target='blank' className='project-image' href={url}>
				<img className="project-image" alt={name} src={image}/>
			</a>
			<div className="project-info">
				<h3 className='project-name'>
					{name}
				</h3>
				<p className='project-desc'>
					{description}
				</p>
				<ul className="icons">
					{icons.map((item, index) => 
						<img key={index} className='icon' src={item} alt={item}/>
					)}
				</ul>
				<div className="links">
					<a target='blank' className='link' href={url}>
						<i className="fas fa-link"/>
						Visit the site
					</a>
					<a href={github} target="blank" className="link"> 
						<i className="fab fa-github"/>
						Visit the github repo 
					</a>
				</div>
			</div>
		</section>
	);
}
