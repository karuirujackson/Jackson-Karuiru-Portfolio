import React from 'react';

import { FiMonitor } from "react-icons/fi";
import { GrServerCluster } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { SlLayers } from "react-icons/sl";

function stacks() {
  return (
    <>
      <section className="relative pt-20 bg-slate-500 h-full">

        <div className='pb-5 mx-auto w-3/4'>
          <div className="flex items-center justify-center space-x-2 pb-1">
            <SlLayers className='text-cyan-400 text-2xl font-bold' />
            <h3 className='text-cyan-400 text-xl'>Tools of Trade</h3>
          </div>
          <div className="flex items-center justify-center space-x-2 pb-3">
            <span className="text-gray-100">I regularly sharpen my skills to fit the market requirments and align with emerging technologies.</span>
          </div>
        </div>
        <div className="mx-auto w-2/3 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex-col p-2 border rounded-lg shadow-md shadow-slate-50 border-cyan-100">
                <div className="flex items-center justify-start space-x-2 pb-3">
                  <FiMonitor className='text-cyan-400 text-xl font-bold' />
                  <span className="text-white uppercase">Front-end</span>
                </div>
                <div className="flex-col">
                    <div className="text-white">
                      <span className="">React.Js</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-11/12 border-green-600 border-2"></div>
                        </div>
                    </div>
                    <div className="text-white">
                        <span>JavaScript/TypeScript</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-11/12 border-green-600 border-2"></div>
                        </div>
                    </div>
                    <div className="text-white">
                        <span>NextJS</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-4/5 border-green-600 border-2"></div>
                        </div>
                    </div>
                    <div className="text-white">
                        <span>Component-Libraries</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-4/5 border-green-600 border-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col p-2 border rounded-lg shadow-md shadow-slate-50 border-cyan-100 ">
                <div className="flex items-center justify-start space-x-2 pb-3">
                    <GrServerCluster className='text-cyan-400 text-xl font-bold' />
                    <span className="text-white uppercase">Back-end</span>
                </div>
                <div className="flex-col">
                    <div className="text-white">
                        <span className="">Node.Js</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-11/12 border-green-600 border-2"></div>
                        </div>
                    </div>
                    <div className="text-white">
                        <span>NextJS/Express.Js</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-4/5 border-green-600 border-2"></div>
                        </div>
                    </div>
                    <div className="text-white">
                        <span>Python -Django</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-4/5 border-green-600 border-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col p-2 border rounded-lg shadow-md shadow-slate-50 border-slate-100 ">
                <div className="flex items-center justify-start space-x-2 pb-3">
                    <FaDatabase className='text-cyan-400 text-xl font-bold' />
                    <span className="text-white uppercase">Databases</span>
                </div>
                <div className="flex-col">
                    <div className="text-white">
                        <span className="">Amazon RDS</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-4/5 border-green-600 border-2"></div>
                        </div>
                    </div>
                    <div className="text-white">
                        <span>Amazon DynamoDB</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-4/5 border-green-600 border-2"></div>
                        </div>
                    </div>
                    <div className="text-white">
                        <span>PostgreSQL</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-4/5 border-green-600 border-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col p-2 border rounded-lg shadow-md shadow-slate-50 border-slate-100 ">
                <div className="flex items-center justify-start space-x-2 pb-3">
                    <SiAzuredevops className='text-cyan-400 text-xl font-bold' />
                    <span className="text-white uppercase">DevOps / ci-cd</span>
                </div>
                <div className="flex-col">
                    <div className="text-white">
                        <span className="">Git/Github Actions</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-11/12 border-green-600 border-2"></div>
                        </div>
                    </div>
                    <div className="text-white">
                        <span>Kubernetes</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-4/5 border-green-600 border-2"></div>
                        </div>
                    </div>
                    <div className="text-white">
                        <span>Docker</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-4/5 border-green-600 border-2"></div>
                        </div>
                    </div>
                    <div className="text-white">
                        <span>Jenkins</span>
                    </div>
                    <div className="flex items-center justify-start space-x-2 pb-2">
                        <div className="w-4/5 border-slate-600 border-2">
                            <div className="w-4/5 border-green-600 border-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default stacks;