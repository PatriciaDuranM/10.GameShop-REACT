import Game from '../game/Game';
import { StyledMain } from '../MainHome/mainHome.styles';
import {
	StyledBox,
	StyledGamexBox,
	StyledPlatformBox,
	StyledSearch,
	StyledSearchIcon
} from './mainshop.styles';

const MainShop = () => {
	return (
		<StyledMain>
			<StyledSearch type='text' placeholder='Search your game...'>
				<StyledSearchIcon src='/assets/images/search.svg' />
			</StyledSearch>
			<StyledBox>
				<StyledPlatformBox></StyledPlatformBox>
				<StyledGamexBox>
					<Game></Game>
				</StyledGamexBox>
			</StyledBox>
		</StyledMain>
	);
};

export default MainShop;
