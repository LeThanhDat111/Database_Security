import './App.css';
import Login from './component/Login.jsx';
import { useReducer } from 'react';
import NhanVien_UI from './component/NhanVien_UI/NhanVien_UI.jsx';
import QuanLy_UI from './component/QuanLy_UI/QuanLy_UI.jsx';
function App() {
	const userState = {
		role: null,
		isLogin: false,
		isValid: true,
	};
	const [state, dispatch] = useReducer(HandleLogin, userState);

	function HandleLogin(state, action) {
		switch (action.type) {
			case 'LOGIN': {
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

				return { ...state, isValid: false };
			}
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
			{state.isLogin ? undefined : <Login dispatch={dispatch} state={state} />}
			{state.isLogin && state.role === 'Nhân Viên' && <NhanVien_UI />}
			{state.isLogin && state.role === 'Quản Lý' && <QuanLy_UI />}
		</>
	);
}

export default App;
