import { useState } from 'react';
import './Login.css';

export default function Login({ dispatch, state }) {
	const [userLogin, setUserLogin] = useState({ name: '', pass: '' });
	const HandleUser = (event) => {
		const { name, value } = event.target;
		setUserLogin((preUser) => ({
			...preUser,
			[name]: value,
		}));
	};
	console.log(userLogin);
	console.log(state);

	return (
		<div className="login_container">
			<h1>Đăng Nhập</h1>

			<div className="input_name-account">
				<h3 className="label_name-account">Tên tài khoản:</h3>
				<input name="name" type="text" placeholder="Nhập tên tài khoản..." onChange={HandleUser} />
			</div>
			<div className="input_pass-account">
				<h3 className="label_pass-account">Mật khẩu:</h3>
				<input name="pass" type="password" placeholder="Nhập mật khẩu..." onChange={HandleUser} />
			</div>
			{state.isValid ? undefined : <p className="noti_erro">Tài khoản hoặc mật khẩu không đúng!</p>}
			<button
				className="btn_login"
				onClick={() => {
					if (!state.isLogin) {
						dispatch({ type: 'LOGIN', payload: userLogin });
					}
				}}>
				Login
			</button>
		</div>
	);
}
