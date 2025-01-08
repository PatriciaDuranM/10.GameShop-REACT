import styled from 'styled-components';
import { COLORS } from '../../styles/ColorStyles';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledMain = styled.main`
	background-color: ${COLORS.black};
	display: flex;
	flex-direction: column;
	padding: 16px;
	gap: 32px;
	border-radius: 16px;
	width: 327px;
	text-align: center;

	@media screen and (width>400px) {
		width: 1560px;
		padding: 32px;
		justify-content: space-between;
	}
`;

const StyledTitle = styled.h1`
	font-size: 32px;
	font-weight: ${FONT_WEIGHT.bold};
	color: white;
`;

const StyledText = styled.p`
	font-size: 16px;
	font-weight: ${FONT_WEIGHT.regular};
	color: ${COLORS.white};
	line-height: 32px;
`;
const StyledButton = styled.button`
	width: 200px;
	height: 50px;
	background-color: ${COLORS.blue};
	border-radius: 16px;
	padding-inline: 20px;
	padding-block: 10px;
	color: white;
	border: none;
`;

export { StyledMain, StyledTitle, StyledText, StyledButton };
