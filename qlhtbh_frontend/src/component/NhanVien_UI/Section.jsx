export default function Section({ setActiveMenu }) {
	return (
		<section>
			<h2>Menu</h2>

			<button onClick={() => setActiveMenu('products')}>Sản phẩm</button>

			<button onClick={() => setActiveMenu('orders')}>Đơn hàng</button>

			<button onClick={() => setActiveMenu('customers')}>Khách hàng</button>
		</section>
	);
}
