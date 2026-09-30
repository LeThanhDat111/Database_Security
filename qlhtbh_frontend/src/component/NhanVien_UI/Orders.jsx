import { useEffect, useState } from 'react';
export default function Orders() {
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		fetch('http://localhost:8080/api/orders')
			.then((response) => response.json())
			.then((data) => {
				setOrders(data);
			})
			.catch((error) => {
				console.error('Lỗi:', error);
			});
	}, []);
	return (
		<div>
			<h3>Quản lý đơn hàng</h3>

			<table>
				<thead>
					<tr>
						<th>MaHD</th>
						<th>MaKH</th>
						<th>MaNV</th>
						<th>NgayLap</th>
					</tr>
				</thead>

				<tbody>
					{orders.map((order) => (
						<tr key={order.MaHD}>
							<td>{order.MaHD}</td>
							<td>{order.MaKH}</td>
							<td>{order.MaNV}</td>
							<td>{order.NgayLap}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
