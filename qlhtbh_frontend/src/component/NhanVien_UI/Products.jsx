import { useEffect, useState } from 'react';
export default function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8080/api/products')
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
			})
			.catch((error) => {
				console.error('Lỗi:', error);
			});
	}, []);
	return (
		<div>
			<h3>Quản lý sản phẩm</h3>

			<button>Thêm sản phẩm</button>
			<button>Sửa sản phẩm</button>
			<button>Xóa sản phẩm</button>

			<table className='table_product'>
				<thead>
					<tr>
						<th>MaSP</th>
						<th>TenSP</th>
						<th>MaLoai</th>
						<th>MaNCC</th>
						<th>DonGia</th>
						<th>SoLuong</th>
					</tr>
				</thead>

				<tbody>
					{products.map((product) => (
						<tr key={product.MaSP}>
							<td>{product.MaSP}</td>
							<td>{product.TenSP}</td>
							<td>{product.MaLoai}</td>
							<td>{product.MaNCC}</td>
							<td>{product.DonGia}</td>
							<td>{product.SoLuong}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
