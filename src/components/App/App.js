import React from 'react';
import Projects from '../Projects/Projects';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default () => {
	return (
		<>
			<Hero/>
			<Projects/>
			<hr/>
			<Footer/>
		</>
	);
}
