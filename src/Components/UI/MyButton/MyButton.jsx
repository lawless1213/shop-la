import './MyButton.scss';

const MyButton = (props) => {
	return (
		<button className={props.class}>
			<span className='caption'>{props.caption}</span>
		</button>
	)
}

export default MyButton;