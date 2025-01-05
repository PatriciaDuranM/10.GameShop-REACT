import { Route, Routes } from 'react-router-dom';
import Layout from '../Layouts/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<h1>HOME</h1>}></Route>
				<Route path='/store' element={<h1>ABOUT</h1>}></Route>
			</Route>
		</Routes>
	);
};
export default Router;
