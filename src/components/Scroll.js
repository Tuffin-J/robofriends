import React from 'react';

const Scroll = (props) => {
	console.log(props);
	return (
		<div style={{overflowY: 'scroll', height: '27.5rem'}}>
			{props.children}
		</div>
		);
};
// empty
export default Scroll;