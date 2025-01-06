import {
	StyledButton,
	StyledMain,
	StyledText,
	StyledTitle
} from './mainHome.styles';

const MainHome = () => {
	return (
		<>
			<StyledMain>
				<StyledTitle>Game Shop</StyledTitle>
				<picture>
					<source
						media='(min-width: 400px)'
						srcSet='/assets/images/logos/logo-desktop.png'
					/>
					<source
						media='(min-width: 360px)'
						srcSet='/assets/images/logos/logo-mobile.png'
					/>
					<img src='/assets/images/banner-mobile.jpg' />
				</picture>
				<StyledText>
					Welcome to GAMER SHOP Discover a world of gaming excitement at your
					fingertips! From the latest blockbusters to timeless classics, we
					offer an extensive collection of games for all platforms. 🎮 Why
					Choose Us? Wide Selection: Thousands of titles across all genres.
					Great Deals: Competitive prices and exclusive offers. Instant Access:
					Digital downloads available 24/7. Trusted Service: Fast and secure
					shopping experience. Level up your gaming experience today! Explore,
					shop, and play like never before.
				</StyledText>
				<link to='/store'>
					<StyledButton>Go To Game Store</StyledButton>
				</link>
			</StyledMain>
		</>
	);
};

export default MainHome;
