import { useState } from 'react';
import './Login.css';

export default function Login({ dispatch, iconMode }) {
	//Khai báo đối tượng để lưu thông tin đăng nhập
	const [userLogin, setUserLogin] = useState({ name: '', pass: '' });
	const [error, setError] = useState('');
	const [login, setLoading] = useState(false);

	//Hàm trả về đối tượng khi người dùng đang thực hiện đăng nhập
	const HandleUser = (event) => {
		const { name, value } = event.target;
		setUserLogin((preUser) => ({
			...preUser,
			[name]: value,
		}));
	};

	const handleLogin = async () => {
		console.log('1. Đã bấm Login');
		console.log('2. Tài khoản:', userLogin.name);
		setLoading(true);
		setError('');

		try {
			const response = await fetch('http://localhost:8080/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: userLogin.name,
					password: userLogin.pass,
					iconMode: iconMode,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				setError(data.message);
				return;
			}

			// Đăng nhập thành công: cập nhật trạng thái ứng dụng
			dispatch({
				type: 'LOGIN',
				payload: data.user,
			});

			console.log('Token:', data.token);
			console.log('Người dùng:', data.user);
		} catch (error) {
			console.error('Lỗi frontend', error);
			setError('Không thể kết nối đến máy chủ.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="login_container">
			<h1 className="label_login">Đăng Nhập</h1>

			<div className="input_name-account">
				<p className="label_name-account">Tài khoản:</p>
				<input name="name" type="text" placeholder="Nhập tên tài khoản..." onChange={HandleUser} className="ip_name" />
			</div>
			<div className="input_pass-account">
				<p className="label_pass-account">Mật khẩu:</p>
				<input name="pass" type="password" placeholder="Nhập mật khẩu..." onChange={HandleUser} className="ip_pass" />
			</div>
			{/* Kiểm tra xem tài khoản hay mật khẩu có đúng không */}
			<div className="err_container">{!error ? undefined : <p className="noti_erro">{error}</p>}</div>
			<button className="btn_login" onClick={handleLogin} disabled={login}>
				{login ? 'Đang đăng nhập...' : 'Login'}
			</button>
		</div>
	);
}
