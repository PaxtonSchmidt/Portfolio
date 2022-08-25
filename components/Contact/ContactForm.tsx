import React from 'react';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

export const ContactForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: yup.object({
      name: yup.string()
        .max(20, '*Must be 20 characters or less')
        .required('*Required'),
      email: yup.string()
        .email('*Invalid email address')
        .required('*Required'),
      message: yup.string()
        .max(20, '*Must be 20 characters or less')
        .required('*Required')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className='w-full max-w-[430px] font-serif text-white'>
      <div className='relative'>
        <input 
          placeholder='Name'
          id='name'
          name='name'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className='w-full bg-black border-2 rounded-3xl pl-8 h-[40px] outline-0'
        />
        {formik.touched.name && formik.errors.name ? (
          <div className='w-full absolute text-right pr-4 text-red'>{formik.errors.name}</div>
        ) : null}
      </div>

      <div className='relative'>
        <input 
          placeholder='E-mail'
          id='email'
          name='email'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className='w-full bg-black border-2 rounded-3xl pl-8 h-[40px] outline-0 mt-6'
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='w-full absolute text-right pr-4 text-red'>{formik.errors.email}</div>
        ) : null}
      </div>
      
      <div className='relative h-fit'>
        <textarea 
          placeholder='Message'
          id='message'
          rows={50}
          name='message'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className='w-full h-[300px] pt-2 bg-black border-2 rounded-3xl pl-8 h-[40px] outline-0 mt-6'
        />
        {formik.touched.message && formik.errors.message ? (
          <div className='w-full text-right pr-4 text-red'>{formik.errors.message}</div>
        ) : null}
      </div>
      <div className='w-full flex justify-center'>
        <button className='bg-white w-fit my-8 mx-auto py-1 px-8 text-black rounded-3xl'>Submit</button>
      </div>
    </form>
  )
}