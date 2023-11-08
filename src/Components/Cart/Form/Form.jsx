import { addOrder } from '../../../data/reducers/cartReducer';
import s from './Form.module.scss';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../data/reducers/settingsReducer';

const Form = () => {
	let dispatch = useDispatch();

	var tomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toLocaleString().split(',')[0].split('.').reverse().join('-');
	
	const orderHandler = (order) => {
		dispatch(addOrder(order));
		dispatch(openModal('order'));
	}

	return (
		<Formik
      	initialValues = {{ email: '', firstName: '', lastName: '', date: tomorrow }}

      	validate={values => {
        	const errors = {};

					if (!values.firstName) {
						errors.firstName = 'Required';
					} else if (!/^[A-Z][a-z]{2,}$/i.test(values.firstName)) {
						errors.firstName = 'Invalid first name';
					}

					if (!values.lastName) {
						errors.lastName = 'Required';
					} else if (!/^[A-Z][a-z]{1,}$/i.test(values.lastName)) {
						errors.lastName = 'Invalid last name';
					}

					if (!values.email) {
						errors.email = 'Required';
					} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						errors.email = 'Invalid email address';
					}

					if (!values.date) {
						errors.date = 'Required';
					} else if (values.date < tomorrow) {
						errors.date = 'Invalid date';
					}

         	return errors;
       }}

       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
					 orderHandler(values);
           setSubmitting(false);

         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form className={s.Form} onSubmit={handleSubmit}>

					{/* firstName */}
					<div className={`form-group ${!(errors.firstName && touched.firstName && errors.firstName) && values.firstName ? 'success' : ''}`}>
						<label for="firstName" className="group-label f-s6">First Name</label>
						<div className="group-main">
							<input
								type="text"
								name="firstName"
								id="firstName"
								placeholder='First Name'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.firstName}
							/>
						</div>
						<div className="group-error f-s6">
							{errors.firstName && touched.firstName && errors.firstName}
						</div>
					 </div>

					 {/* lastName */}
					<div className={`form-group ${!(errors.lastName && touched.lastName && errors.lastName) && values.lastName ? 'success' : ''}`}>
						<label for="lastName" className="group-label f-s6">Last Name</label>
						<div className="group-main">
							<input
								type="text"
								name="lastName"
								id="lastName"
								placeholder='Last Name'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.lastName}
							/>
						</div>
						<div className="group-error f-s6">
							{errors.lastName && touched.lastName && errors.lastName}
						</div>
					 </div>

					{/* email */}
           <div className={`form-group ${!(errors.email && touched.email && errors.email) && values.email ? 'success' : ''}`}>
						<label for="email" className="group-label f-s6">Email</label>
						<div className="group-main">
							<input
								type="email"
								name="email"
								id="email"
								placeholder='Email'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
						</div>
						<div className="group-error f-s6">
							{errors.email && touched.email && errors.email}
						</div>
					 </div>

					 {/* date */}
           <div className={`form-group ${!(errors.date && touched.date && errors.date) &&values.date ? 'success' : ''}`}>
						<label for="date" className="group-label f-s6">Date of receiving</label>
						<div className="group-main">
							<input
								type="date"
								name="date"
								id="date"
								placeholder='Date'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.date}
							/>
						</div>
						<div className="group-error f-s6">
							{errors.date && touched.date && errors.date}
						</div>
					 </div>
           
           <div className="form-group submit">
						<button className={`myButton big transparent ${Object.values(values).every(value => value !== '') && !Object.keys(errors).length ? '' : 'disabled'}`} type="submit" disabled={isSubmitting}>
							Submit
						</button>
					 </div>
         </form>
       )}
     </Formik>
	)
}

export default Form;