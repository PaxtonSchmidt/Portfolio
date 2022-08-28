import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useForm } from '@formspree/react'
import * as yup from 'yup';
import { SubmitButton } from './SubmitButton';

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
        <SubmitButton submitting={state.submitting} succeeding={succeeding} />
      </div>
    </form>
  )
}