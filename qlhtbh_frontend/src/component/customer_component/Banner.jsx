import { useEffect } from 'react';
import { banner } from '../../assets/data.js';
export default function Banner({ number, updateNumber }) {
	console.log('Banner render:', number);

	useEffect(() => {
		console.log('Effect setup');
		const changeBanner = setInterval(() => {
			console.log('Được gọi');
			updateNumber((number) => (number + 1) % banner.length);
		}, 5000);

		return () => {
			console.log('Được gỡ');
			clearInterval(changeBanner);
		};
	}, [updateNumber]);
	return (
		<div className="banner_view">
			<div
				className="banner_track"
				style={{
					transform: `translateX(${-number * 100}%)`,
				}}>
				{banner.map((img, index) => (
					<img src={img} key={index} alt="home_page" className="img_home" />
				))}
			</div>
		</div>
	);
}
