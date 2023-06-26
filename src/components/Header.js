import React from "react";
import styled from "styled-components";

const Head = styled.div`
	height: 8vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${props => props.theme.primary};
	color: ${props => props.theme.light};
`;

const Header = () => {
	return (
		<div>
			<Head>
				<h1>KASIR</h1>
			</Head>
		</div>
	);
};

export default Header;
