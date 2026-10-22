import Products from './Products';
import Orders from './Orders';
import Customers from './Customers';
export default function Sidebar({ activeMenu }) {
	return (
		<aside>
			{activeMenu === 'products' && <Products />}
			{activeMenu === 'orders' && <Orders />}
			{activeMenu === 'customers' && <Customers />}
		</aside>
	);
}
