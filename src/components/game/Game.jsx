import { useContext } from 'react';
import {
	StyledBox,
	StyledBuy,
	StyledCartBox,
	StyledDelete,
	StyledImg,
	StyledInCart,
	StyledTitle
} from './game.styles';
import { CartContext } from '../../Contexts/CartContext';

const Game = ({ game }) => {
	const { addToCart, cart, removeGame } = useContext(CartContext);

	const gameInCart = cart.find(games => games.id === game.id);

	return (
		<StyledBox>
			<StyledTitle>{game.title}</StyledTitle>
			<StyledImg src={game.image} />
			{!gameInCart && (
				<StyledBuy onClick={() => addToCart(game)}>
					Buy - ${game.price}
				</StyledBuy>
			)}
			{gameInCart && (
				<StyledCartBox>
					<StyledInCart>In Cart</StyledInCart>
					<StyledDelete
						onClick={() => removeGame(game)}
						src='/assets/images/trash.svg'
					/>
				</StyledCartBox>
			)}
		</StyledBox>
	);
};

export default Game;
