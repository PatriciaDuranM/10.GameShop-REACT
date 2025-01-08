import { useState } from 'react';
import { CartContext } from '../Contexts/CartContext';

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	console.log(cart);
	const addToCart = game => {
		setCart([...cart, game]);
	};

	const removeGame = game => {
		const cartUpdate = cart.filter(gamesInCart => gamesInCart.id !== game.id);
		setCart(cartUpdate);
	};
	return (
		<CartContext.Provider value={{ cart, addToCart, removeGame }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
