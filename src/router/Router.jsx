import { Route, Routes } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import Home from '../pages/home/Home';
import Store from '../pages/Store/Store';
import Checkout from '../pages/Checkout/Checkout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />}></Route>
				<Route path='/store' element={<Store />}></Route>
				<Route path='/checkout' element={<Checkout />}></Route>
			</Route>
		</Routes>
	);
};
export default Router;
