import React, { Suspense, useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Canvas } from '@react-three/fiber';
import Loader from '../Components/Loader/Loader';
import Fox from '../models/Fox';

const Contact = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(
    {
      name: '',
      email: '',
      message: ''
    }
  );
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setCurrentAnimation('walk');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    try {
      const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
      const recipientTemplateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
      const autoTemplateID = import.meta.env.VITE_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;


      // Email parameters for recipients
      const templateParams = {
        from_name: form.name,
        message: form.message,
        to_email: "devbyaheli@gmail.com",
      };

      // Email parameters for user confirmation
      const linkedTemplateParams = {
        to_name: form.name,
        user_email: form.email,
      };

      // Sending email to recipients (Raja & Vignesh)
      await toast.promise(
        emailjs.send(serviceID, recipientTemplateID, templateParams, publicKey),
        {
          pending: "Sending email...",
          success: "Email sent to recipients successfully!",
          error: "Failed to send email to recipients.",
        }
      );

      // Sending confirmation email to the user
      await toast.promise(
        emailjs.send(serviceID, autoTemplateID, linkedTemplateParams, publicKey),
        {
          pending: "Sending confirmation email...",
          success: "Confirmation email sent to you!",
          error: "Failed to send confirmation email.",
        }
      );

      // Clear the form after successful submission
      if (form.current) {
        form.current.reset();
      }
      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error("Email sending error:", error);
      setCurrentAnimation('idle');
    } finally {
      setIsLoading(false);
      setCurrentAnimation('idle');
    }
  }

  const handleFocus = () => setCurrentAnimation('walk');

  const handleBlur = () => setCurrentAnimation('idle');


  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text blue-gradient_text'>Get in Touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Enter your name'
              required
              value={form.name}
              onChange={handleChange}
              // onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Enter your email'
              required
              value={form.email}
              onChange={handleChange}
              // onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              className='textarea resize-none'
              rows={5}
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              // onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            className='btn'
            // onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.75} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact