import s from './Form.module.scss';
import { Formik } from 'formik';

const Form = () => {
	return (
		<Formik
       initialValues = {{ email: '', firstName: '', lastName: '' }}

       validate={values => {
         const errors = {};

				if (!values.firstName) {
					errors.firstName = 'Required';
				} else if (
					!/^[A-Z][a-z]{2,}$/i.test(values.firstName)
				) {
					errors.firstName = 'Invalid first name';
				}

				if (!values.lastName) {
					errors.lastName = 'Required';
				} else if (
					!/^[A-Z][a-z]{2,}$/i.test(values.lastName)
				) {
					errors.lastName = 'Invalid last name';
				}

         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }

         return errors;
       }}

       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
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
					<div className="form-group">
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
					<div className="form-group">
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
           <div className="form-group">
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
           
           <button className='myButton big transparent' type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
	)
}

export default Form;