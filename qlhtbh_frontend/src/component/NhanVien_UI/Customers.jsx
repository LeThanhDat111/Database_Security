import { useState, useEffect } from 'react';
export default function Customers() {
	const [customers, setCustomers] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8080/api/customers')
			.then((response) => response.json())
			.then((data) => {
				setCustomers(data);
			})
			.catch((error) => {
				console.error('Lỗi:', error);
			});
	}, []);
	return (
		<div>
			<h3>Quản lý khách hàng</h3>

			<table>
				<thead>
					<tr>
						<th>MaKH</th>
						<th>TenKH</th>
						<th>SDT</th>
						<th>DiaChi</th>
					</tr>
				</thead>

				<tbody>
					{customers.map((customer) => (
						<tr key={customer.MaKH}>
							<td>{customer.MaKH}</td>
							<td>{customer.TenKH}</td>
							<td>{customer.SDT}</td>
							<td>{customer.DiaChi}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
