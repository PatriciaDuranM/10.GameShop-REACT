import { useState } from 'react';
import {
	StyledBurger,
	StyledContainer,
	StyledCross,
	StyledDiv,
	StyledHeader,
	StyledMenu,
	StyledNumberBurger,
	StyledNumberCheck,
	StyledOption
} from './header.styles';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<StyledHeader>
			<StyledDiv>
				<picture>
					<source
						media='(min-width: 768px)'
						srcSet='/assets/images/logos/logo-desktop.png'
					/>
					<source
						media='(min-width: 360px)'
						srcSet='/assets/images/logos/logo-mobile.png'
					/>
					<img
						src='public/assets/images/logos/logo-mobile.png'
						alt='Gamer Shop Logo'
					/>
				</picture>
				<StyledContainer>
					<StyledBurger
						onClick={() => setMenuOpen(!menuOpen)}
						src='/assets/images/hamburguer.svg'
						alt='Menu'
					/>
					<StyledNumberBurger>0</StyledNumberBurger>
				</StyledContainer>
				<StyledCross
					onClick={() => setMenuOpen(menuOpen)}
					src='/assets/images/cross.svg'
					alt='Close Menu'
				/>
			</StyledDiv>
			<nav>
				<StyledMenu $menuOpen={menuOpen}>
					<StyledOption>Home</StyledOption>
					<StyledOption>Game Store</StyledOption>
					<StyledOption>
						Checkout
						<StyledNumberCheck>0</StyledNumberCheck>
					</StyledOption>
				</StyledMenu>
			</nav>
		</StyledHeader>
	);
};

export default Header;
