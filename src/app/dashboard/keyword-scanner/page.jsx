'use client'
import React, { useRef, useState } from 'react';
import { renderReport } from 'lighthouse-viewer';
import axios from 'axios';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { resolve } from 'styled-jsx/css';


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const page = () => {
    const [url, setUrl] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadProg, setLoadProg] = useState(0);


    const handleCheckbox = (category) => {
        setCategories(prev => {
            if (prev.includes(category)) {
                return prev.filter(ele => ele != category);
            } else {
                return [...prev, category]
            }
        })
    }


    const handleScan = async (e) => {

        e.preventDefault();
        if (!url) return;
        setLoading(true);
        setLoadProg(0)
        await sleep(100)
        setLoadProg(15)
        await sleep(100)
        setLoadProg(27)
        await sleep(100)
        setLoadProg(47)
        try {

            const { data } = await axios.post('/api/keyword-scan', { url }, {

                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setLoadProg(53);
                },
            })
            setLoadProg(62);
            await sleep(1000);
            setLoadProg(77);
            await sleep(1000);
            setLoadProg(85);
            await sleep(1000);
            setLoadProg(94);
            setKeywords(data?.keywords);

            await sleep(1000);
        } catch (error) {
            console.error('Error scanning website:', error);
        }
        setLoadProg(100)
        await sleep(500)
        setLoading(false)
    };


    return (
        <section className="bg-white">
            <div className="px-6 py-8 mx-auto h-full lg:py-0">
                <div className="">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 mb-10">
                            Keywords Scanner
                        </h1>


                        <div className='mt-5 w-full'>
                            <form className=' max-w-[60rem]' onSubmit={handleScan}>
                                <div className='flex items-center justify-center'>
                                    <input type="text" name="business_name" id="business_name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tprimary-600 focus:border-tprimary-600 block w-full p-2.5" placeholder="Enter your website url" required="" value={url} onChange={(e) => setUrl(e.target.value)} />

                                    <button className='ml-4 rounded-md bg-indigo-600 py-2 px-4 text-white'>Scan</button>
                                </div>

                                {
                                    keywords.length != 0
                                    && (
                                        <div>
                                            <h1 className='text-gray-700 my-4 text-xl px-4'>
                                                keywords For : <span className='text-sky-500 ml-2'>{url}</span>
                                            </h1>
                                            <div className='flex flex-wrap items-center'>
                                                {!loading && keywords.map(keyword => (
                                                    <h2 className='py-2 cursor-pointer mx-4 my-3 px-4 rounded-md bg-gray-300 hover:bg-gray-400 transition-all text-xl text-gray-800'>{keyword}</h2>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }


                                {loading && (
                                    <div className='flex justify-center items-center mt-20'>
                                        <div className='w-48 h-48 my-auto'>
                                            <CircularProgressbar value={loadProg} text={`${loadProg}%`} />
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page