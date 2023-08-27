import React, { FormEvent, useRef, useState } from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { BiSolidPhone } from 'react-icons/bi';
import { MdMarkEmailUnread, MdLocationPin } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_9w4wozf', 'template_x01by0f', form.current, 'htRFmUMm7lOpeA5bz')
        .then((result) => {
          console.log(result.text);
          setIsEmailSent(true);
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };
  return (
    <motion.div 
    whileInView={{ x: 0, transition: { duration: 0.4 }, opacity: 1 }}
    initial={{ x: -50, opacity: 0 }}  className='h-auto w-full bg-gradient-to-r border-r-1 from-[#121212] via-[#212225] to-[#1F2022] rounded-r-[100px] py-16 px-4 md:px-20'>
        <div className="w-full h-16  flex justify-center items-center ">
        <motion.div
          whileInView={{ y: 0, transition: { duration: 0.8 }, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
        >
            <h1 className="w-cover h-fit bg-clip-text bg-gradient-to-r text-center from-[#FFD369] to-[rgba(255,210,105,0.31)] text-5xl font-bold text-transparent ">Contact Me</h1>   
            <p className='text-center text-[#EEEEEE] w-96 my-7'><i>You can directly connect me from here, Just fill up the information below, I am very responsive to messages...</i></p>       
        </motion.div>
        </div>
        <div className="h-auto w-full flex justify-center items-start flex-col md:flex-row ">
            <div className="h-full w-full flex justify-center items-center px-10 ">
                <div className=" w-[80%] text-white text-1xl pb-2 mb:pb-20 border border-slate-800 px-4 rounded-md bg-[#282b31] mt-12">
                  <div className="h-20 flex justify-start items-center text-2xl ">
                    <h2>Contact Information</h2>
                  </div>
                  <div className=" w-full h-auto md:h-14 flex justify-start items-center gap-5 ">
                    <BiSolidPhone size={25}/>
                    <p className="text-start">09678333488</p>
                  </div>
                  <div className=" w-full h-auto md:h-14 flex justify-start items-center gap-5 ">
                    <MdMarkEmailUnread size={25}/>
                    <p className="text-start">costalesarnel08@gmail.com</p>
                  </div>
                  <div className=" w-full h-auto md:h-14 flex justify-start items-center gap-5 ">
                    <MdLocationPin size={25}/>
                    <p className="text-start">Brgy. Cacarong Matanda, Pandi Bulacan 3014</p>
                  </div>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className=" h-full w-full overflow-hidden relative text-white p-10 ">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-2 px-4 my-2 rounded-md bg-[#2e323b]"
          value={formData.user_name}
          onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full p-2 px-4 my-2 rounded-md bg-[#2e323b]"
          value={formData.user_email}
          onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
        />
        <textarea
          placeholder="Your Message"
          name="message"
          className="w-full p-2 h-52 px-4 my-2 rounded-md bg-[#2e323b]"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        {isEmailSent ? (
          <p className="text-center text-green-500">Email sent successfully!</p>
        ) : (
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: '#282F44',
              color: '#ffffff',
              marginTop: '15px',
              marginBottom: '30px',
              fontSize: '16px'
            }}
          >
            Send Message
          </Button>
        )}
      </form>
        </div>
      </motion.div>
  )
}

export default ContactSection