import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import CartProvider from './providers/CartProvider';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<CartProvider>
					<Router />
				</CartProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
