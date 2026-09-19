const sql = require('mssql');

const config = {
	user: 'sa',
	password: 'sapassword',
	server: 'localhost',
	database: 'QLHTBH',
	options: {
		encrypt: false,
		trustServerCertificate: true,
	},
};

const poolPromise = sql.connect(config);

module.exports = {
	sql,
	poolPromise,
};
