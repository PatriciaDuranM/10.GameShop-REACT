import styled from 'styled-components';
import { COLORS } from '../../styles/ColorStyles';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledSearch = styled.input`
	width: 269px;
	height: 50px;
	background-color: ${COLORS.dark};
	padding-inline: 16px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	gap: 16px;
	color: #8a8c8e;
	font-size: 32px;
	font-weight: ${FONT_WEIGHT.bold};
`;
const StyledSearchIcon = styled.img`
	width: 32px;
	height: 32px;

	@media screen and (width>400px) {
		width: 50px;
		height: 50px;
	}
`;

const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;

	@media screen and (width>400px) {
		flex-direction: row;
		gap: 16px;
	}
`;

const StyledPlatformBox = styled.div``;

const StyledGamexBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;

	@media screen and (width>400px) {
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 12px;
		row-gap: 16px;
	}
`;

export {
	StyledSearch,
	StyledSearchIcon,
	StyledBox,
	StyledPlatformBox,
	StyledGamexBox
};
