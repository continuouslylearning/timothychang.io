import React from 'react';
import Project from '../Project/Project';
import knowted from '../../images/knowted.png';
import benkyoushimashou from '../../images/benkyoushimashou.png';
import albumify from '../../images/albumify.jpg';

import goIcon from '../../svg/go.png';
import jsIcon from '../../svg/js.svg';
import reactIcon from '../../svg/react.svg';
import nodeIcon from '../../svg/node.svg';
import redisIcon from '../../svg/redis.svg';
import reduxIcon from '../../svg/redux.svg';
import postgresIcon from '../../svg/postgres.svg';
import s3Icon from '../../svg/s3.svg';

const projects = [
	{
		name: 'Knowted',
		description: `Knowted was developed to improve online learning. 
		This app allows the user to organize online resources into topics & folders and provides a rich text editor for notetaking.
		I collaborated with three other developers to build this project. 
		I built the entire backend with Node.js, Postgres and JSON web token authentication and contributed to the React/Redux frontend.
		`,
		icons: [jsIcon, reactIcon, reduxIcon, nodeIcon, postgresIcon],
		image: knowted,
		url: 'https://knowted.netlify.com',
		github: 'https://github.com/continuouslylearning/knowted'
	},
	{
		name: 'Benkyoushimashou!',
		image: benkyoushimashou,
		description: `Benkyoushimashou! helps first-year students of Japanese learn hiragana and katakana characters with spaced repetition. 
		I wrote the frontend with React/Redux and implemented the backend with Node.js, Redis and JSON web token authentication.`,
		url: 'https://benkyoushimashou.netlify.com',
		github: 'https://github.com/continuouslylearning/benkyoushimashou-client',
		icons: [jsIcon, reactIcon, reduxIcon, nodeIcon, redisIcon]
	}, 
	{
		name: 'Albumify (Work in Progress)',
		image: albumify,
		description: `
				Albumify is a basic cloud storage service for images. 
				The frontend is built with React & Redux, styled with Flexbox & Grid and deployed with S3 Static Hosting & a CloudFront distribution. 
				The backend API is written in Go, built with the Gin framework and deployed with Heroku.
				User records are persisted to a Postgres instance on RDS and images are stored in an S3 bucket. 
				Presigned URLs are cached in a Redis instance on Elasticache to improve responsiveness and reduce load on the S3 bucket.
			`,
		url: 'https://dmfabj38q6zza.cloudfront.net',
		github: 'https://github.com/continuouslylearning/albumify',
		icons: [jsIcon, reactIcon, reduxIcon, postgresIcon, redisIcon, goIcon, s3Icon]
	}
]

export default () => {
  const projectElements = projects.map((project, index) => <Project key={index} {...project}/>);

  return (
	<main className='projects'>
		<h2 className='projects-header'>Projects</h2>
		{projectElements}
	</main>
  );
}
