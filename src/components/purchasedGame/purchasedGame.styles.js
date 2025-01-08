import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/ColorStyles';

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
		flex-direction: row;
		width: 651px;
		height: 252px;
		padding: 32px;
		gap: 32px;
	}
`;

const StyledImg = styled.img`
	width: 250px;
	height: 330px;
	border-radius: 16px;

	@media screen and (width>400px) {
		width: 147px;
		height: 188px;
	}
`;

const StyledInfoBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`;

const StyledTitle = styled.span`
	font-size: 16px;
	color: white;
	font-weight: ${FONT_WEIGHT.bold};

	@media screen and (width>400px) {
		font-size: 24px;
	}
`;

const StyledBuyMoreButton = styled.button`
	width: 140px;
	height: 45px;
	background-color: ${COLORS.blue};
	font-size: 16px;
	font-weight: ${FONT_WEIGHT.bold};
	color: white;
`;

const StyledRemove = styled.img`
	width: 16px;
	height: 16px;
	@media screen and (width>400px) {
		width: 24px;
		height: 24px;
	}
`;

const StyledDisccountBox = styled.div`
	width: 281px;
	height: 66px;
	padding: 10px;
	background-color: ${COLORS.dark};
	border-radius: 16px;

	@media screen and (width>400px) {
		width: 643px;
		height: 229px;
		display: flex;
		flex-direction: row;
		gap: 32px;
		padding: 32px;
	}
`;

const StyledDisccountText = styled.p`
	font-size: 16px;
	font-weight: ${FONT_WEIGHT.bold};
	color: white;
	text-align: center;

	@media screen and (width>400px) {
		font-size: 24px;
	}
`;

const StyledCart = styled.div`
	width: 281px;
	padding: 10px;
	background-color: ${COLORS.dark};
	border-radius: 16px;
	display: flex;
	flex-direction: column;
	gap: 18px;
`;

export {
	StyledBox,
	StyledImg,
	StyledInfoBox,
	StyledTitle,
	StyledBuyMoreButton,
	StyledRemove,
	StyledDisccountBox,
	StyledDisccountText,
	StyledCart
};
