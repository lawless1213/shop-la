import { data } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from './Banner.module.scss';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const Banner = () => {
	let banners = data.banners;

	return (
		<Swiper
		className={s.Banner}
		spaceBetween={0}
		loop={true}
		modules={[Pagination]}
		pagination={{ clickable: true }}
		>
			{
				banners.map(banner => 
					<SwiperSlide key={banners.indexOf(banner)} className={s.BannerItem}>
						<Link to='/products' className={s.Image_wrapper}>
							<div className={s.Image}>
								<img src={banner} alt="banner" />
							</div>
						</Link>
					</SwiperSlide>
				)
			}
		</Swiper>
	)
}

export default Banner;