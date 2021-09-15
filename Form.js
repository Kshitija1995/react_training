
import { useFormik } from 'formik';
import React from 'react';
import *  as Yup from 'yup';

const initialValues = {
    firstName : '',
    lastName : '',
    role : ''
}

const onSubmit = values => {
    console.log ('Form data', values);
}

const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    role: Yup.
    string().
    required('choose one'),
})

export default function Form() {

    const formik = useFormik ({
        initialValues, 
        onSubmit,
        validationSchema
        })
   
console.log ('Form errors', formik.errors)

     return(
        <div className="form-control">
            <div className="header">
                <div className="headerText">
                    <h2 > Login Form</h2>
                </div>
                </div>
            <form onSubmit={formik.handleSubmit}>
               
                <div>
                <label htmlFor="firstName">FirstName</label>
                <input 
                type="text" 
                id= "firstName"
                name="firstName" 
                onChange={formik.handleChange}
                values={formik.values.firstName} /><br />

                {formik.errors.firstName ? (
                    <div className="error">{formik.errors.firstName}</div>
                ): null}
                </div>

                <div>
                <label htmlFor="lastName">LastName</label>
                <input 
                type="text" 
                id= "lastName" 
                name="lastName"
                onChange={formik.handleChange}
                values={formik.values.lastName} /><br />
                {formik.errors.lastName ? (
                    <div className="error">{formik.errors.lastName}</div>
                ): null}
                </div>

                <div>
                <label htmlFor="role">Select appropriate Role </label >
                <select name="role" onChange={formik.handleChange}
                values={formik.values.role}>
                 <option value={null}>Select role...</option>
                <option value="owner">Owner</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                </select> <br />

            
                {formik.errors.role ? (
                    <div className="error">{formik.errors.role}</div>
                ): null}

              

                </div>
                <button type="submit">Submit</button>
            </form>
            <br />

           
           
        </div>
    )

}