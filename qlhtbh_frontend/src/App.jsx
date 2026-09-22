import './App.css';
import { useReducer } from 'react';
import NhanVien_UI from './component/NhanVien_UI/NhanVien_UI.jsx';
import QuanLy_UI from './component/QuanLy_UI/QuanLy_UI.jsx';
import { Login_UI } from './component/Login_UI/Login_UI.jsx';
function App() {

	// Tạo đối tượng mặc định khi chưa đăng nhập, gồm quyền(role),
	//  có đang đăng nhập không (isLogin), isValid (tài khoản và mật khẩu đúng không)
	const userState = {
		role: null,
		isLogin: false,
		isValid: true,
	};

	//Khai báo hai biến state mang trạng thái login và hàm dispatch để nhận hành động
	const [state, dispatch] = useReducer(HandleLogin, userState);

	//Hàm kiểm tra đăng nhập
	function HandleLogin(state, action) {
		switch (action.type) {
			// Hành động login được thực hiện
			case 'LOGIN': {
				//Tạo đổi tượng để nhận name và pass lấy từ component 
				// Login từ thuộc tính payload chứa đối tượng userLogin
				const { name, pass } = action.payload;
				if (name === 'NV01' && pass === 'Abc12345') {
					return {
						role: 'Nhân Viên',
						isLogin: true,
						isValid: true,
					};
				} else if (name === 'QL01' && pass === 'Abc12345') {
					return {
						role: 'Quản Lý',
						isLogin: true,
						isValid: true,
					};
				}

				//Nếu tài khoản hoặc sai mật khẩu thì chuyển isValid sang flase để thông báo
				return { ...state, isValid: false };
			}
			//Khi logout thì chuyển role ,isLogin, isValid về trạng thái ban đầu
			case 'LOGOUT':
				return {
					role: null,
					isLogin: false,
					isValid: true,
				};
		}
	}
	return (
		<>	
			{/* Hiển thị Loign khi mới vào web. Nếu đã đăng thì ẩn component Login ngược lại thì hiện */}
			{state.isLogin ? undefined : <Login_UI dispatch={dispatch} state={state} />}

			{/* Kiểm tra xem người dùng đang đăng nhập với vai trò nào */}
			{state.isLogin && state.role === 'Nhân Viên' && <NhanVien_UI />}
			{state.isLogin && state.role === 'Quản Lý' && <QuanLy_UI />}

		</>
	);
}

export default App;
