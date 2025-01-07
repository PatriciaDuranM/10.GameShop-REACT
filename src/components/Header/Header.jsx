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
import { Link } from 'react-router-dom';

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
						src={
							menuOpen
								? '/assets/images/cross.svg'
								: '/assets/images/hamburguer.svg'
						}
						alt='Menu'
					/>
					<StyledNumberBurger>0</StyledNumberBurger>
				</StyledContainer>
				<StyledCross onClick={() => setMenuOpen(menuOpen)} alt='Close Menu' />
			</StyledDiv>
			<nav>
				<StyledMenu $menuOpen={menuOpen}>
					<Link to='/'>
						<StyledOption>Home</StyledOption>
					</Link>
					<Link to='/store'>
						<StyledOption>Game Store</StyledOption>
					</Link>
					<Link to='/chekckout'>
						<StyledOption>
							Checkout
							<StyledNumberBurger>0</StyledNumberBurger>
						</StyledOption>
					</Link>
				</StyledMenu>
			</nav>
		</StyledHeader>
	);
};

export default Header;
