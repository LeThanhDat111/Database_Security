const express = require('express');
const cors = require('cors');

const { sql, poolPromise } = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Backend đang chạy!');
});

app.get('/api/products', async (req, res) => {
	try {
		const pool = await poolPromise;

		const result = await pool.request().query(`
            SELECT *
            FROM SanPham
        `);

		res.json(result.recordset);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: 'Lỗi khi lấy dữ liệu sản phẩm',
		});
	}
});

app.get('/api/orders', async (req, res) => {
	try {
		const pool = await poolPromise;

		const result = await pool.request().query(`
            SELECT *
            FROM HoaDon
        `);

		res.json(result.recordset);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: 'Lỗi khi lấy dữ liệu sản phẩm',
		});
	}
});

app.get('/api/customers', async (req, res) => {
	try {
		const pool = await poolPromise;

		const result = await pool.request().query(`
            SELECT *
            FROM KhachHang
        `);

		res.json(result.recordset);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: 'Lỗi khi lấy dữ liệu sản phẩm',
		});
	}
});
app.listen(8080, () => {
	console.log('Server đang chạy tại http://localhost:8080');
});
