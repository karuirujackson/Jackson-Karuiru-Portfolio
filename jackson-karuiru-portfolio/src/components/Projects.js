import React from 'react';
import { GoProjectSymlink } from "react-icons/go";
import ContactForm from '../assets/ContactForm.png'

function Projects() {
  return (
    <section className="pt-20 bg-slate-500 h-full">
        <div className="flex items-center justify-center space-x-2 pb-1">
            <GoProjectSymlink className='text-cyan-400 text-2xl font-bold' />
            <h3 className='text-cyan-400 text-xl'>Featured Projects</h3>
        </div>
        <div className="flex items-center justify-center space-x-2 pb-3">
            <span className="text-gray-100">Here are some of my projects. For a full list, please check out my <span className="text-blue-300">Github</span> profile!</span>
        </div>
        <div className="pt-10">
            <div className="flex flex-col-2 space-x-2 mx-auto w-2/3">
                <div className="flex items-center justify-center">
                    <img src={ContactForm} alt="" className="border border-slate-400 rounded-lg h-72 " />
                </div>
                <div className="flex flex-col items-center justify-center space-y-10">
                    <div className="border border-slate-400 rounded-lg bg-gradient-to-l from-slate-400 to-slate-500 p-1">
                        <span className="text-white">An interactive Form using web3Forms and sweetAlert2 API</span>
                    </div>
                    <div className="flex items-start justify-center space-x-2">
                        <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">React.js</span>
                        <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">TailwindCSS</span>
                        <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">Jest</span>
                    </div>
                    <div className="text-cyan-400">
                        <button className="border border-slate-400 rounded-lg p-1">Source Code</button>
                    </div>
                </div>
            </div>  
        </div>
        <div className="pt-10">
            <div className="flex flex-col-2 space-x-2 mx-auto w-2/3">
                <div className="flex items-center justify-center">
                    <img src={ContactForm} alt="" className="border border-slate-400 rounded-lg h-72 " />
                </div>
                <div className="flex flex-col items-center justify-center space-y-10">
                    <div className="border border-slate-400 rounded-lg bg-gradient-to-l from-slate-400 to-slate-500 p-1">
                        <span className="text-white">An interactive Form using web3Forms and sweetAlert2 API</span>
                    </div>
                    <div className="flex items-start justify-center space-x-2">
                        <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">React.js</span>
                        <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">TailwindCSS</span>
                        <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">Jest</span>
                    </div>
                    <div className="text-cyan-400">
                        <button className="border border-slate-400 rounded-lg p-1">Source Code</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-10">
            <div className="flex flex-col-2 space-x-2 mx-auto w-2/3">
                <div className="flex items-center justify-center">
                    <img src={ContactForm} alt="" className="border border-slate-400 rounded-lg h-72 " />
                </div>
                <div className="flex flex-col items-center justify-center space-y-10">
                    <div className="border border-slate-400 rounded-lg bg-gradient-to-l from-slate-400 to-slate-500 p-1">
                        <span className="text-white">An interactive Form using web3Forms and sweetAlert2 API</span>
                    </div>
                    <div className="flex items-start justify-center space-x-2">
                        <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">React.js</span>
                        <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">TailwindCSS</span>
                        <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">Jest</span>
                    </div>
                    <div className="text-cyan-400">
                        <button className="border border-slate-400 rounded-lg p-1">Source Code</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects;