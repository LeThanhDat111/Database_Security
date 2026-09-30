import logout_icon from '../../assets/logout.png';
import UseContext_Logout from './UseContext_Logout';
import { useContext } from 'react';
export default function Section({ setActiveMenu, activeMenu }) {
	const dispatch = useContext(UseContext_Logout);
	return (
		<section>
			<h2>Menu</h2>
			<div className="cont_option-menu">
				<button onClick={() => setActiveMenu('products')} className={activeMenu === 'products' ? 'btn_onpick' : ''}>
					Sản phẩm
				</button>

				<button onClick={() => setActiveMenu('orders')} className={activeMenu === 'orders' ? 'btn_onpick' : ''}>
					Đơn hàng
				</button>

				<button onClick={() => setActiveMenu('customers')} className={activeMenu === 'customers' ? 'btn_onpick' : ''}>
					Khách hàng
				</button>
			</div>
			<div className="cont_logout">
				<button className="btn_logout" onClick={() => dispatch({ type: 'LOGOUT' })}>
					<img src={logout_icon} alt="logout" className="img_logout" />
					<p>Đăng Xuất</p>
				</button>
			</div>
		</section>
	);
}
