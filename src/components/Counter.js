import React from "react";
import styled from "styled-components";

const CounterStyle = styled.div`
	width: 1rem;
	height: 1rem;
	background: ${props => props.theme.warning};
	color: #fff;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const Counter = ({ inc, dec }) => {
	if (inc) {
		return <CounterStyle>+</CounterStyle>;
	} else {
		return <CounterStyle>-</CounterStyle>;
	}
	return <div></div>;
};

export default Counter;
