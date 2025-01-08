import styled from 'styled-components';
import { COLORS } from '../../styles/ColorStyles';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledBox = styled.div`
	width: 270px;
	height: 457px;
	display: flex;
	flex-direction: column;
	gap: 18px;
	padding-block: 16px;
	padding-inline: 10px;
	background-color: ${COLORS.dark};
	border-radius: 16px;

	@media screen and (width>400px) {
		width: 240px;
		height: 407px;
		padding: 20px;
		gap: 24px;
	}
`;

const StyledTitle = styled.h3`
	margin: 0px;
	font-size: 16px;
	color: white;
	font-weight: ${FONT_WEIGHT.bold};
	text-align: start;

	@media screen and (width>400px) {
		font-size: 18px;
	}
`;

const StyledImg = styled.img`
	width: 250px;
	height: 330px;
	border-radius: 16px;

	@media screen and (width>400px) {
		width: 200px;
		height: 257px;
	}
`;

const StyledBuy = styled.button`
	width: 250px;
	height: 40px;
	background-color: ${COLORS.blue};
	padding-block: 10px;
	text-align: center;
	color: white;
	border-radius: 16px;
	font-size: 18px;
	font-weight: ${FONT_WEIGHT.bold};
	border: none;

	@media screen and (width>400px) {
		width: 200px;
		height: 40px;
		padding-inline: 20px;
	}
`;

const StyledCartBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 16px;

	@media screen and (width>400px) {
		gap: 14px;
	}
`;
const StyledDelete = styled.img`
	width: 24px;
	height: 24px;
`;

const StyledInCart = styled.button`
	width: 209px;
	height: 40px;
	background-color: ${COLORS.pink};
	padding-block: 10px;
	padding-inline: 20px;
	text-align: center;
	border: none;
	border-radius: 16px;
	color: white;

	@media screen and (width>400px) {
		width: 162px;
	}
`;

export {
	StyledBox,
	StyledTitle,
	StyledImg,
	StyledBuy,
	StyledCartBox,
	StyledDelete,
	StyledInCart
};
