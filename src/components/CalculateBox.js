import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Box = styled.div`
	position: fixed;
	bottom: 0;
	width: 20rem;
	height: 8rem;
	box-shadow: 1px 1px 10px 1px #ccc;
	padding: 0.4rem;
`;
const Total = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.4rem;
`;
const Pay = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.4rem;
	input[type="number"] {
		border: none;
		border-bottom: 1px solid #000;
		font-weight: bold;
		text-align: center;
		&:focus {
			outline: none;
		}
		&::-webkit-inner-spin-button,
		&::-webkit-outer-spin-button {
			-webkit-appearance: none;
		}
	}
`;
const Change = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.6rem;
`;
const BtnBox = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CalculateBox = () => {
	return (
		<Box>
			<Total>
				<h4 style={{ margin: 0 }}>Total</h4>
				<p style={{ margin: 0 }}>23000</p>
			</Total>
			<Pay>
				<p style={{ margin: 0 }}>Jumlah Bayar</p>
				<input type="number" />
			</Pay>
			<Change>
				<p style={{ margin: 0 }}>Kembalian</p>
				<p style={{ margin: 0 }}>1000</p>
			</Change>
			<BtnBox>
				<Button />
				<Button primary />
			</BtnBox>
		</Box>
	);
};

export default CalculateBox;
