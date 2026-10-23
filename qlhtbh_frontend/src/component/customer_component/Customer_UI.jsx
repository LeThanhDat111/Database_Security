import homepage from '../../assets/HomePage.png';
import './Customer.css';
import LogoShop from '../../assets/LogoShop.png';
import User from '../../assets/User.svg';
import Cart from '../../assets/Cart.svg';
import Search from '../../assets/Search.svg';
import LikeList from '../../assets/LikeLits.svg';
import Dropdown from '../../assets/Dropdown.svg';
import Arrow from '../../assets/Arrow.svg';
import Express_delivery from '../../assets/Express_delivery.svg';
import Security from '../../assets/Security.svg';
import Speech_bubble from '../../assets/Speech_bubble.svg';
export default function QuanLy_UI() {
	return (
		<div className="container_quanly">
			<header className="header_customer">
				<div className="container_logo-shop">
					<img src={LogoShop} alt="" className="logo_shop" />
				</div>

				<ul className="nav_text nav">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Shop</a>
					</li>
					<li>
						<a href="#">
							About <img src={Dropdown} alt="" className="dropdwn_icon" />
						</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>

				<ul className="nav_icon nav">
					<li>
						<a href="#">
							<img src={Search} alt="" className="img_nav-customer" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={LikeList} alt="" className="img_nav-customer" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={Cart} alt="" className="img_nav-customer" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={User} alt="" className="img_nav-customer" />
						</a>
					</li>
				</ul>
			</header>
			<main className="main_customer">
				<img src={homepage} alt="home_page" className="img_home" />
				<div className="content_main-customer">
					<div className="box_intro">
						<p className="txt_titel">Công Nghệ Hiện Đại</p>
						<p className="txt_intro">
							Thiết Bị Công Nghệ <br /> <span>Chính Hãng, Giá Tốt</span>
						</p>
						<p className="txt_desc">
							"Khám phá hệ sinh thái thiết bị đỉnh cao — Nâng tầm trải <br />
							nghiệm giải trí và làm việc mỗi ngày."
						</p>
						<div className="box_btn">
							<button>
								<p>Khám phá</p>
								<img src={Arrow} alt="" className="icon_arrow" />
							</button>
						</div>
					</div>
					<div className="box_convinient">
						<div>
							<img src={Security} alt="" />
							<div className="first_conv">
								<p>
									Bảo hành chính hãng <br />
									<span>Lên đến 12 tháng</span>
								</p>
							</div>
						</div>
						<div>
							<img src={Express_delivery} alt="" />
							<div className="second_conv">
								<p>
									Giao hàng nhanh <br />
									<span>Toàn quốc</span>
								</p>
							</div>
						</div>
						<div>
							<img src={Speech_bubble} alt="" />
							<div>
								<p>
									Hỗ trợ 24/7 <br />
									<span>Tư vấn tận tâm</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
