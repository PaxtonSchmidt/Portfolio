import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useForm } from '@formspree/react'
import * as yup from 'yup';

export const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm('mjvzkopo')
  const [succeeding, setSucceeding] = useState(false)

  useEffect(() => {
    if(!succeeding && state.succeeded){
      setSucceeding(true)
      setTimeout(()=>setSucceeding(false), 3000)
    }
    if(state.succeeded){
      formik.resetForm()
    }
  }, [state.succeeded])

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
        .required('*Required')
    }),
    onSubmit: values => {
      let response = handleSubmit(values)
      console.log(response)
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
          <div className='w-full absolute text-right pr-4 text-red'>{formik.errors.message}</div>
        ) : null}
      </div>
      <div className='w-full flex justify-center'>
        <button type='submit' disabled={state.submitting} className={`${succeeding ? 'bg-green text-white' : 'bg-white text-black'} h-[35px] w-[150px] flex justify-center my-8 mx-auto py-1 px-8 rounded-3xl`}>
          {state.submitting
          ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="black" className="bi bi-bounding-box-circles animate-spin" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          : succeeding 
            ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="white" className="bi bi-check-lg" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
            : 'Submit'}
        </button>
      </div>
    </form>
  )
}