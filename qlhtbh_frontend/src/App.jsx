import './App.css';
import { useReducer } from 'react';
import NhanVien_UI from './component/NhanVien_UI/NhanVien_UI.jsx';
import QuanLy_UI from './component/QuanLy_UI/QuanLy_UI.jsx';
import { Login_UI } from './component/Login_UI/Login_UI.jsx';
import UseContext_Logout from './component/NhanVien_UI/UseContext_Logout.jsx';
function App() {
	// Tạo đối tượng mặc định khi chưa đăng nhập, gồm quyền(role),
	//  có đang đăng nhập không (isLogin), isValid (tài khoản và mật khẩu đúng không)
	const userState = {
		role: null,
		name: null,
		isLogin: false,
	};

	//Khai báo hai biến state mang trạng thái login và hàm dispatch để nhận hành động
	const [state, dispatch] = useReducer(HandleLogin, userState);

	//Hàm kiểm tra đăng nhập
	function HandleLogin(state, action) {
		switch (action.type) {
			// Hành động login được thực hiện
			case 'LOGIN': {
				return {
					role: action.payload.role,
					name: action.payload.name,
					isLogin: true,
				};
			}
			//Khi logout thì chuyển role ,isLogin, name về trạng thái ban đầu
			case 'LOGOUT':
				return {
					role: null,
					name: null,
					isLogin: false,
				};
			default:
				return state;
		}
	}
	return (
		<>
			{/* Hiển thị Loign khi mới vào web. Nếu đã đăng thì ẩn component Login ngược lại thì hiện */}
			{state.isLogin ? undefined : <Login_UI dispatch={dispatch} />}

			{/* Kiểm tra xem người dùng đang đăng nhập với vai trò nào */}
			{state.isLogin && state.role === 'Customer' && (
				<UseContext_Logout.Provider value={dispatch}>
					<NhanVien_UI />
				</UseContext_Logout.Provider>
			)}
			{state.isLogin && state.role === 'TruongPhongNS' && <QuanLy_UI />}
		</>
	);
}

export default App;
