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
    const [report, setReport] = useState(null);
    const [categories, setCategories] = useState(['performance']);
    const [device,setDevice] = useState('desktop');
    const [loading,setLoading] = useState(false);
    const [loadProg,setLoadProg] = useState(0);


    const handleCheckbox = (category) => {
        setCategories(prev => {
            if(prev.includes(category)){
                return prev.filter(ele => ele != category);
            }else{
                return [...prev,category]
            }
        })
    }


    const handleScan = async (e) => {
     
        e.preventDefault();
        if (!url) return;
        if(categories.length === 0) return window.alert('atleast one category select');
        setLoading(true);
        setLoadProg(0)
        await sleep(100)
        setLoadProg(15)
        await sleep(100)
        setLoadProg(27)
        await sleep(100)
        setLoadProg(47)
        try {
            
            const { data } = await axios.post('/api/scan', { url,categories,device },{
                
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
            const reportHtml = renderReport(data, {});
            const string = new XMLSerializer().serializeToString(reportHtml)
            
            await sleep(1000);
            setReport(string);
            console.log(string)
        } catch (error) {
            console.error('Error scanning website:', error);
        }
        setLoadProg(100)
        await sleep(500)
        setLoading(false)
    };

    function createMarkup(report) {
        return { __html: report };
    }
    return (
        <section className="bg-white">
            <div className="px-6 py-8 mx-auto h-full lg:py-0">
                <div className="">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 mb-10">
                            Website Scanner
                        </h1>


                        <div className='mt-5 w-full'>
                            <form className=' max-w-[60rem]' onSubmit={handleScan}>
                                <div className='flex items-center justify-center'>
                                    <input type="text" name="business_name" id="business_name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tprimary-600 focus:border-tprimary-600 block w-full p-2.5" placeholder="Enter your website url" required="" value={url} onChange={(e) => setUrl(e.target.value)} />

                                    <button className='ml-4 rounded-md bg-indigo-600 py-2 px-4 text-white'>Scan</button>
                                </div>

                                <div className='flex items-center justify-start my-5'>
                                    <p className='text-black text-xl font-semibold'>Categories</p>
                                    
                                    <ul className='flex items-center ml-8 gap-6'>
                                        <li className='flex items-center gap-2'>
                                            <input type='checkbox' checked={categories.includes('performance')} onChange={() => handleCheckbox('performance')}/>
                                            <p className='text-gray-800 text-lg'>Performance</p>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <input type='checkbox' checked={categories.includes('accessibility')} onChange={() => handleCheckbox('accessibility')}/>
                                            <p className='text-gray-800 text-lg'>Accessibility</p>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <input type='checkbox' checked={categories.includes('best-practice')} onChange={() => handleCheckbox('best-practice')}/>
                                            <p className='text-gray-800 text-lg'>Best Practice</p>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <input type='checkbox' checked={categories.includes('seo')} onChange={() => handleCheckbox('seo')}/>
                                            <p className='text-gray-800 text-lg'>SEO</p>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <input type='checkbox' checked={categories.includes('pwa')} onChange={() => handleCheckbox('pwa')}/>
                                            <p className='text-gray-800 text-lg'>Progressive Web App</p>
                                        </li>
                                    </ul>
                                    
                                </div>


                                <div className='flex items-center justify-start my-5'>
                                    <p className='text-black text-xl font-semibold'>Device</p>
                                    
                                    <ul className='flex items-center ml-8 gap-6'>
                                        <li className='flex items-center gap-2'>
                                            <input type='radio' name='device' checked={device==='mobile'} value={'mobile'} onChange={(e) => setDevice(e.target.value)} />
                                            <p className='text-gray-800 text-lg'>Mobile</p>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <input type='radio' name='device' checked={device==='desktop'} value={'desktop'} onChange={(e) => setDevice(e.target.value)}/>
                                            <p className='text-gray-800 text-lg'>Desktop</p>
                                        </li>
                                    </ul>
                                    
                                </div>


                                {report && !loading && (
                                    <div className='mt-20 flex flex-col justify-center items-center'>
                                        <h2 className='mb-5'>Scan Results <span className='text-indigo-500 ml-5 text-lg'>{url}</span></h2>

                                        <div dangerouslySetInnerHTML={createMarkup(report)}>

                                        </div>
                                    </div>
                                )}

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
        // <div>
        //     <h1>Website Scanner</h1>
        //     <label>
        //         Enter Website URL:
        //         <input
        //             type="text"
        //             value={url}
        //             onChange={(e) => setUrl(e.target.value)}
        //             className='border border-gray-600 rounded-md'
        //         />
        //     </label>
        //     <button onClick={handleScan} className='ml-4 rounded-md bg-indigo-600 py-2 px-4 text-white'>Scan</button>

        //     {report && (
        //         <div>
        //             <h2>Scan Results</h2>

        //             <div dangerouslySetInnerHTML={createMarkup(report)}>

        //             </div>
        //         </div>
        //     )}

        // </div>
    )
}

export default page