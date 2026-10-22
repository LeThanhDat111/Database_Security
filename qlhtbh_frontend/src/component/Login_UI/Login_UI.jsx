import { useState } from 'react';
import Login from './Login';
import { Pic_Inro_Login } from './Pic_Intro_Login';
import offIconMode from '../../assets/switch-off.png';
import onIconMode from '../../assets/switch-on.png';

export function Login_UI({ dispatch }) {
	const [iconMode, setIconMode] = useState(false);

	const handleIconMode = () => {
		setIconMode(!iconMode);
	};

	return (
		<div className="container">
			<div className="container_changeMode">
				<button onClick={handleIconMode} className="btn_modelogin">
					<img src={!iconMode ? offIconMode : onIconMode} alt="img_changeLogin" className="img_modelogin" />
				</button>
			</div>
			<div className="loginUI_container">
				<Pic_Inro_Login />
				<div className="fit_login">
					<Login dispatch={dispatch} iconMode={iconMode} />
				</div>
			</div>
			{!iconMode ? undefined : <div className="is_warning"></div>}
		</div>
	);
}
