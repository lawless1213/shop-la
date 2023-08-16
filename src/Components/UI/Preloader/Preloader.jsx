import loader from "../../../assets/images/loader.svg";
import s from "./Preloader.module.scss";

const Preloader = () => {
	return (
		<div className={s.Preloader}>
			<img src={loader} alt="loader" />
		</div>
	)
}

export default Preloader;