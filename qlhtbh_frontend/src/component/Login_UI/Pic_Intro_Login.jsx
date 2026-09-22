import picture from '../../assets/Login_Introduce_IMG.png';
import './Login_UI.css'
export function Pic_Inro_Login() {
	return (
		<figure className="container_login-img">
			<img src={picture} alt="Pic_Intro_Login" className="edit_img-login" />
		</figure>
	);
}
