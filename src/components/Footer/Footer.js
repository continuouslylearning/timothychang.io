import React from 'react';
import './Footer.css';

export default () => {
	return (
		<footer>
			<div className='contacts'>
				<a href='mailto:timothychang@tutanota.com'><i className="fas fa-envelope"></i></a>
				<a target='blank' href='https://github.com/continuouslylearning'><i className="fab fa-github"></i></a>
				<a target='blank' href='https://www.linkedin.com/in/timothychang00'><i className="fab fa-linkedin-in"></i></a>
			</div>
		</footer>
	);
}
