import Section from './Section';
import './NhanVien.css';
import Sidebar from './Sidebar';
import { useState } from 'react';
export default function NhanVien_UI() {
	const [activeMenu, setActiveMenu] = useState('products');
	return (
		<div className="nhanvien_container">
			<header>
				<h1>Hệ thống quản lý bán hàng</h1>
				<div className="info_employee">
					<h3 className="id_imployee">Xin chào: NV01</h3>
					<h3 className="role_imployee">Vai trò: Nhân viên</h3>
				</div>
			</header>
			<main>
				<Section setActiveMenu={setActiveMenu} />
				<Sidebar activeMenu={activeMenu} />
			</main>
		</div>
	);
}
