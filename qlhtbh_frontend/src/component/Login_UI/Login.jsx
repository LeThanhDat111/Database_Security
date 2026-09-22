import { useState } from 'react';
import './Login.css';

export default function Login({ dispatch, state }) {
	//Khai báo đối tượng để lưu thông tin đăng nhập
	const [userLogin, setUserLogin] = useState({ name: '', pass: '' });

	//Hàm trả về đối tượng khi người dùng đang thực hiện đăng nhập
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
				<p className="label_name-account">Tài khoản:</p>
				<input name="name" type="text" placeholder="Nhập tên tài khoản..." onChange={HandleUser} className='ip_name'/>
			</div>
			<div className="input_pass-account">
				<p className="label_pass-account">Mật khẩu:</p>
				<input name="pass" type="password" placeholder="Nhập mật khẩu..." onChange={HandleUser} className='ip_pass' />
			</div>
			{/* Kiểm tra xem tài khoản hay mật khẩu có đúng không */}
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
