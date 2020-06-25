import React from 'react';
import '../containers/App.css';

const Card = ({ name, email, id }) => {
	return(
		<div className='cardBg tc dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
			<div> 
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	); // end return
} // end Card 

export default Card;




