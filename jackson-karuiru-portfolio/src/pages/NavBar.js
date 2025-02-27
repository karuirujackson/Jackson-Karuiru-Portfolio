import React from 'react';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { GoDotFill } from 'react-icons/go';

function NavBar() {
  return (
    <div className="relative">
                <nav className="fixed mx-auto w-full top-4 bg-slate-600 shadow-md shadow-cyan-200">
                    <div className="flex md:flex sm:w-full items-center justify-center border border-slate-400 rounded h-14 p-3 space-x-8">
                        <div className="flex items-center justify-center space-x-5">
                            <div className="text-white text-2xl hover:text-cyan-400">
                                <Link to='/'><IoHome /></Link>
                            </div>
                            <div className="flex uppercase space-x-5">
                                <Link to="about" className="text-white hover:text-cyan-400">About</Link>
                                <Link to="stacks" className="text-white hover:text-cyan-400">Stacks</Link>
                                <Link to="projects" className="text-white hover:text-cyan-400">Projects</Link>
                                <Link to="contact" className="text-white hover:text-cyan-400">Contact</Link> 
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="text-green-500 animate-ping"><GoDotFill /></div>
                            <div className="flex items-center justify-center space-x-5">
                                <span className="text-white text-sm">Available for Work</span>
                                <button className="flex items-center justify-center border border-slate-400 rounded px-1 py-1 space-x-1.5 text-black bg-cyan-400">
                                    <div className=""><CiCalendarDate /></div>
                                    <span>SCHEDULE CALL</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
  )
}

export default NavBar;