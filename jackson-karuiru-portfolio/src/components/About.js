import React from 'react';
import { Link } from 'react-router-dom';


import { CiFaceMeh } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa6";
import Profile from '../assets/Profile.jpeg';
import { FaRegHandPaper } from "react-icons/fa";
import { CiLocationOn } from 'react-icons/ci';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function About() {
  return (

    <div className='bg-slate-500 h-full'>
        <div className="relative top-20 sm:flex-cols md:flex-cols pb-8">
            <div className='flex items-center justify-center'>
                <img src={Profile} alt='Profile' className='w-40 h-36 rounded-full scale-75'/>
            </div>
            <div className="flex items-center justify-center space-x-1">
                <div className='text-xl text-cyan-400 animate-bounce'><FaRegHandPaper /></div>
                <span className="text-white text-2xl">Hello, I am</span>
            </div>
            <div className="flex items-center justify-center">
                <h2 className="text-cyan-400 text-2xl underline">Jackson Karuiru</h2>
            </div>
            <span className="flex items-center justify-center text-white text-xl pt-3 font-bold">FrontEnd Software Engineer</span>
            <p className="flex items-center justify-center text-md text-gray-100 pt-1 ">
                A tech enthusiastic and a Freelancer providing Software Development and Design services. 
            </p>
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <CiLocationOn />
                <span className='text-white  font-bold py-3'>Nairobi, Kenya</span>
            </div>  
            <div className="flex items-center justify-center">
                <button className="flex items-center justify-center text-2xl text-white border rounded-3xl  shadow-md shadow-cyan-200 py-3 px-6 space-x-4 cursor-pointer">
                    <Link href='https://github.com/karuirujackson' target='blank'>{<FaGithub />}</Link>
                    <FaLinkedin />
                    <FaXTwitter />
                </button>
            </div> 
        </div>  
        <div className="">
            <div className=" relative pt-36 flex-cols">
                <div className="flex items-center justify-center space-x-1">
                    <div className="text-cyan-400 text-2xl">
                        <CiFaceMeh className='font-bold'/>
                    </div>
                    <h2 className="text-cyan-400 text-xl">About Me</h2>
                </div>
                <div className="mx-auto w-2/3 pt-3 ">
                    <p className="flex items-center justify-center border border-cyan-300 rounded-xl py-5 shadow shadow-cyan-50 text-center text-slate-100">
                        Innovative FrontEnd Software Engineer with a keen eye for detail and a commitment to continuous learning. Armed with a solid foundation in both front-end and some back-end development, I thrive on tackling complex challenges and delivering elegant and interactive solutions within the web2 and web3 space.
                    </p>
                </div>
            </div>
            <div className="relative pt-20 flex-cols">
                <div className="flex items-center justify-center space-x-1 pb-3">
                    <div className="text-cyan-400 text-2xl font-bold">
                        <FaGraduationCap />
                    </div>
                    <h2 className="text-cyan-400 text-xl">Education and Work Experience</h2>
                </div>
                <div className="flex-col space-y-10">
                    <div className="mx-auto w-2/3 px-3 pt-3 shadow-md shadow-cyan-50  border rounded-lg border-cyan-300">
                        <h3 className="text-xl  text-cyan-300">Frontend Software Engineer</h3>
                        <h4 className="text-cyan-400">Freelancer</h4>
                        <ul className="text-white px-3">
                            <li>
                                Currently working on a Frontend and Backend code of an E-commerce application.
                            </li>
                            <li>
                                Collaborated with the friends to quickly and efficiently build front-end apps using ReactJS.
                            </li>
                        </ul>
                        <h4 className="text-cyan-400">2024-present</h4>
                    </div>
                    <div className="mx-auto w-2/3 px-3 pt-3 shadow-md shadow-cyan-50  border rounded-lg border-cyan-300">
                        <h3 className="text-xl  text-cyan-300">Frontend Software Engineer</h3>
                        <h4 className="text-cyan-400">Freelancer</h4>
                        <ul className="text-white px-3">
                            <li>
                                Currently working on a Frontend and Backend code of an E-commerce application.
                            </li>
                            <li>
                                Collaborated with the friends to quickly and efficiently build front-end apps using ReactJS.
                            </li>
                        </ul>
                        <h4 className="text-cyan-400">2024-present</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default About;