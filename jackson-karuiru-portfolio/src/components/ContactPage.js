import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { IoMdHappy } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

function ContactPage() {
    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending...');
        const formData = new FormData(event.target);
        formData.append('access_key', 'd2adfc0c-870a-4f4b-866b-84f4f60edbeb');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult('Form Submitted Successfully')
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message)
        }
    };


  return (
    <div className="flex-col pt-20 pb-10 bg-slate-500 h-full max-h-min">
        <div className="flex items-center justify-center space-x-2 pb-1">
                <TiMessages className='text-cyan-400 text-xl font-bold' />
                <h3 className='text-cyan-400 text-xl'>Contact Me</h3>
            </div>
            <div className="flex items-center justify-center space-x-2 pb-3">
                <span className="text-gray-100">Glad you are here, do not hesitate to contact me!</span>
                <IoMdHappy className='text-cyan-400 text-xl' />
            </div>
            <div className="flex items-center justify-center pt-2 space-x-8">
                <button className="flex items-center justify-center uppercase border border-slate-400 rounded-md px-1 py-1 space-x-1.5 sm:text text-black bg-cyan-400">
                    <div className="py-1">
                        <FaRegEnvelope className='text-xl' />
                    </div>
                    <span className='text-sm'>Email Me</span>
                </button>
                <button className="flex items-center justify-center uppercase border border-slate-400 rounded-md px-1 py-1 space-x-1.5 sm:text text-black bg-cyan-400">
                    <div className="py-1">
                        <CiCalendarDate className='text-xl' />
                    </div>
                    <span className='text-sm'>Schedule Call</span>
                </button>
            </div>
            <div className="flex items-center justify-center mx-auto w-2/3 space-x-2 pt-10 pb-10">
                <div className="w-1/2 border-slate-300 border-2"></div>
                <span className='text-slate-300'>OR</span>
                <div className="w-1/2 border-slate-300 border-2"></div>
            </div>
            <div className="md:flex-row md:w-4/5 flex flex-col items-center justify-center mx-auto w-4/5 space-x-10 pt-12">
                <form action="" onSubmit={onSubmit}>
                    <div className="flex-col space-x-2">
                        <div className="md:grid grid-cols-2 gap-1 text-white space-x-2 pb-3">
                            <div className="pb-3">
                                <input type="text" placeholder='Name' className="border border-slate-400 rounded-lg p-2 bg-slate-600 md" />
                            </div>
                            <div>
                                <input type="text" placeholder='Email' className="border border-slate-400 rounded-lg p-2 bg-slate-600" />
                            </div>
                        </div>
                        <div className='pb-2'>
                            <textarea name="" id="" placeholder='Write Your Message' className='border border-slate-400 text-white bg-slate-600 w-full h-32 rounded-lg p-2'></textarea>
                        </div>
                        <div className="flex items-center justify-center pb-3">
                            <button className="bg-slate-600 border text-cyan-400 rounded-lg py-2 px-20  border-slate-400 shadow-md shadow-cyan-200">Send Message</button>
                        </div>
                    </div>
                </form>
                <span>{result}</span>
                <div className="grid grid-rows-4 gap-2">
                    <div className="flex pb-3">
                        <button className="flex items-center justify-start space-x-8 text-cyan-400 border rounded-lg px-6 py-3 border-slate-400 shadow-md shadow-cyan-100">
                            <div className="flex space-x-2">
                                <FaGithub className='text-cyan-400 text-xl' />
                                <span>Github</span>
                            </div>
                            <div className="flex">
                                <IoIosArrowForward className='text-cyan-400 text-xl animate-pulse' />
                            </div>
                        </button>
                    </div>
                    <div className="flex pb-3">
                        <button className="flex items-center justify-start space-x-8 text-cyan-400 border rounded-lg px-6 py-3  border-slate-400 shadow-md shadow-cyan-100">
                            <div className="flex space-x-2">
                                <FaLinkedin className='text-cyan-400 text-xl' />
                                <span>LinkedIn</span>
                            </div>
                            <div className="flex">
                                <IoIosArrowForward className='text-cyan-400 text-xl animate-pulse' />
                            </div>
                        </button>
                    </div>
                    <div className="flex pb-3">
                        <button className="flex items-center justify-start space-x-8 text-cyan-400 border rounded-lg px-6 py-3  border-slate-400 shadow-md shadow-cyan-100">
                            <div className="flex space-x-2">
                                <FaXTwitter className='text-cyan-400 text-xl' />
                                <span>XTwitter</span>
                            </div>
                            <div className="flex">
                                <IoIosArrowForward className='text-cyan-400 text-xl animate-pulse' />
                            </div>
                        </button>
                    </div>                   
                </div>
            </div>        
    </div>
  )
}

export default ContactPage;