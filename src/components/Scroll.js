import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', height: '27.5rem'}}>
			{props.children}
		</div>
		);
};
export default Scroll;