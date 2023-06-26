import "./App.css";
import Header from "./components/Header";
import { ThemeProvider, styled } from "styled-components";
import * as theme from "./styled/theme";
import ProductCard from "./components/ProductCard";
import { useSelector } from "react-redux";

// const theme = {
// 	primary: "red",
// 	secondary: "blue",
// };

// const Container = styled.div`
// 	text-align: center;
// `;
// const Logo = styled.img`
// 	height: 1000px;
// `;
// const Button = styled.button`
// 	color: ${theme.primary};
// 	background: ${props => (props.primary ? "blue" : "green")};
// `;
// const Tomatobtn = styled(Button)`
// 	background: tomato;
// `;

// const AnotherButton = styled.button`
// 	${props => {
// 		switch (props.variant) {
// 			case "primary":
// 				return `background:blue`;
// 			case "success":
// 				return `background:green`;
// 			default:
// 				return `background:grey`;
// 		}
// 	}}
// `;
const Container = styled.div`
	display: flex;
	width: 100%;
	height: 92vh;
`;
const MenuContainer = styled.div`
	width: 15%;
	padding: 0.5rem 0;
	padding-right: 0.5rem;
`;
const ProductContainer = styled.div`
	width: 60%;
	height: 100%;
	background: ${theme.light};
	border-left: 1px solid #f7f7f7;
	border-right: 1px solid #f7f7f7;
	padding: 0.5rem 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
const CartContainer = styled.div`
	width: 25%;
	padding: 0.5rem 0;
`;

function App() {
	const products = useSelector(state => state.product.products);
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container>
				<MenuContainer>Menu</MenuContainer>
				<ProductContainer>
					{products.map(item => (
						<ProductCard key={item.id} item={item} />
					))}
				</ProductContainer>
				<CartContainer>Cart</CartContainer>
			</Container>
		</ThemeProvider>
	);
}

export default App;
