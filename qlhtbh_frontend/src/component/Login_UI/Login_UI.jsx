import Login from './Login';
import { Pic_Inro_Login } from './Pic_Intro_Login';

export function Login_UI({ dispatch, state }) {
	return (
		<div className="loginUI_container">
			<Pic_Inro_Login />
			<div className='fit_login'>
				<Login dispatch={dispatch} state={state} />
			</div>
		</div>
	);
}
