import Section from './Section';
import './NhanVien.css';
import Sidebar from './Sidebar';
import { useState } from 'react';
export default function NhanVien_UI() {
	const [activeMenu, setActiveMenu] = useState('products');
	return (
		<div className="nhanvien_container">
			<header>
				<h1>Quản Lý Hệ Thống Bán Hàng</h1>
				<div className="info_employee">
					<h3 className="id_imployee">Xin chào: NV01</h3>
					<h3 className="role_imployee">Vai trò: Nhân viên</h3>
				</div>
			</header>
			<main>
				<Section setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
				<Sidebar activeMenu={activeMenu} />
			</main>
			<footer>
				<p> &copy;2026 Code by Le Thanh Dat</p>
			</footer>
		</div>
	);
}
