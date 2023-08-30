import s from './Form.module.scss';
import { Formik } from 'formik';

const Form = () => {
	return (
		<div className={s.Form}>
			<Formik
       initialValues = {{ email: '', password: '' }}

       validate={values => {
         const errors = {};

         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }

				 if (!values.password) {
					errors.password = 'Required';
				} else if (
					!/^.{6}$/i.test(values.email)
				) {
					errors.email = 'Invalid password address(6 and more symbols)';
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
         <form onSubmit={handleSubmit}>
           <div className="form-group">
						<div className="group-main">
							<input
								type="email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
						</div>
						<div className="group-error">
							{errors.email && touched.email && errors.email}
						</div>
					 </div>
					 <div className="form-group">
						<div className="group-main">
							<input
							type="password"
							name="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
						</div>
						<div className="group-error">
							{errors.password && touched.password && errors.password}
						</div>
					 </div>
           
           
           <button className='myButton big transparent' type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
		</div>
	)
}

export default Form;