import {
	StyledBox,
	StyledBuy,
	StyledCartBox,
	StyledDelete,
	StyledImg,
	StyledInCart,
	StyledTitle
} from './game.styles';

const Game = () => {
	return (
		<StyledBox>
			<StyledTitle>GameTitle</StyledTitle>
			<StyledImg />
			<StyledBuy>Buy - $</StyledBuy>
			<StyledCartBox>
				<StyledInCart>In Cart</StyledInCart>
				<StyledDelete src='/assets/images/trash.svg' />
			</StyledCartBox>
		</StyledBox>
	);
};

export default Game;
