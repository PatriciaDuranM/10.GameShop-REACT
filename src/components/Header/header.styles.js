import styled from 'styled-components';
import { COLORS } from '../../styles/ColorStyles';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 32px;
	width: 327px;
	height: 100px;
	align-items: center;
	border-radius: 16px;
	background-color: ${COLORS.black};

	@media screen and (width>375px) {
		height: 200px;
		width: 1560px;
	}
`;
const StyledDiv = styled.div`
	width: 281px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const StyledLogo = styled.div`
	width: 51px;
	height: 62px;
	background-image: '/assets/images/logos/logo-mobile.png';

	@media screen and (width>375px) {
		width: 105px;
		height: 126px;
		background-image: 'public/assets/images/logos/logo-desktop.png';
	}
`;

const StyledContainer = styled.div`
	display: ${({ $menuOpen }) => ($menuOpen ? 'static' : 'flex')};
	position: relative;
	width: 68px;
	height: 62px;

	@media screen and (width>400px) {
		display: none;
	}
`;
const StyledBurger = styled.img`
	width: 50px;
	height: 50px;
	position: absolute;
	bottom: 0px;
`;
const StyledNumberBurger = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 50px;
	background-color: ${COLORS.blue};
	color: white;
	text-align: center;
	padding-top: 3px;
	position: absolute;
	top: 0px;
	right: 0px;
`;

const StyledMenu = styled.ul`
	z-index: 1;
	display: ${({ $menuOpen }) => ($menuOpen ? 'flex' : 'none')};
	flex-direction: column;
	gap: 16px;
	padding: 32px;
	padding-bottom: 16px;
	align-items: center;
	width: 100%;
	position: absolute;
	left: 0px;
	top: 88px;
	background-color: ${COLORS.black};
	border-radius: 0px 0px 16px 16px;

	@media screen and (width>400px) {
		position: static;
		display: flex;
		flex-direction: row;
		gap: 32px;
	}
`;
const StyledOption = styled.li`
	width: 197px;
	height: 42px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12px;
	justify-content: center;
	text-align: center;
	color: ${COLORS.pink};
	font-weight: ${FONT_WEIGHT.regular};
	font-size: 24px;
	position: relative;

	@media screen and (width>400px) {
		font-size: 24px;
		width: 160px;
	}
`;

const StyledNumberCheck = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 50px;
	background-color: ${COLORS.blue};
	color: white;
	text-align: center;
	padding-top: 2px;
	top: 0px;
	right: 0px;
	font-size: 18px;
	position: absolute;

	@media screen and (width>400px) {
		top: -8px;
		right: 6px;
	}
`;

const StyledCross = styled.img`
	display: ${({ $menuOpen }) => ($menuOpen ? 'flex' : 'none')};
	width: 50px;
	height: 50px;
`;

export {
	StyledHeader,
	StyledLogo,
	StyledContainer,
	StyledBurger,
	StyledNumberBurger,
	StyledMenu,
	StyledOption,
	StyledCross,
	StyledDiv,
	StyledNumberCheck
};
