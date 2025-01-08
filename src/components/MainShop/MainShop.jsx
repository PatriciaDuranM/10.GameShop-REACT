import { GAMES } from '../../constants/games-info';
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
			<StyledSearch
				type='text'
				placeholder='Search your game...'
			></StyledSearch>
			<StyledSearchIcon src='/assets/images/search.svg' />
			<StyledBox>
				<StyledPlatformBox></StyledPlatformBox>
				<StyledGamexBox>
					{GAMES.map(game => (
						<Game key={game.id} game={game} />
					))}
				</StyledGamexBox>
			</StyledBox>
		</StyledMain>
	);
};

export default MainShop;
