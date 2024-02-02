'use client'
import React, { useLayoutEffect, useState } from 'react'
import axios from 'axios';

const page = () => {
  const [formData,setFormData] = useState({
    business_name: '',
    company_address: '',
    company_place_id: '',
    website: ''
  });

  const changeHandler = (e) => {
    setFormData(prev => ({...prev, [e.target.name]:e.target.value }))
  }

  useLayoutEffect(() => {
    (async function(){
      try {
        const {data} = await axios.get('/api/bussiness-add');
        if(data?.details?.business_name) setFormData(prev => ({...prev,business_name: data?.details?.business_name}))
        if(data?.details?.website) setFormData(prev => ({...prev,website: data?.details?.website}))
        if(data?.details?.company_address) setFormData(prev => ({...prev,company_address: data?.details?.company_address}))
        if(data?.details?.company_place_id) setFormData(prev => ({...prev,company_place_id: data?.details?.company_place_id}))
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    })()
  },[])

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const {data} = await axios.post('/api/bussiness-add',formData);
      console.log(data?.message)
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  }
  return (
    <section className="bg-white">
      <div className="px-6 py-8 mx-auto h-full lg:py-0">
        <div className="">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 mb-10">
              Business Details
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="business_name" className="block mb-2 text-sm font-medium text-gray-900">Business Name</label>
                <input type="text" name="business_name" id="business_name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tprimary-600 focus:border-tprimary-600 block w-full p-2.5" placeholder="Enter your business name" required="" value={formData.business_name} onChange={changeHandler}/>
              </div>
              <div>
                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">Website (optional)</label>
                <input type="text" name="website" id="website" placeholder="Enter Your Website URl" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tprimary-600 focus:border-tprimary-600 block w-full p-2.5" required="" value={formData.website} onChange={changeHandler}/>
              </div>
              <div>
                <label htmlFor="company_address" className="block mb-2 text-sm font-medium text-gray-900">Company Address</label>
                <input type="text" name="company_address" id="company_address" placeholder="Address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tprimary-600 focus:border-tprimary-600 block w-full p-2.5" required="" value={formData.company_address} onChange={changeHandler}/>
              </div>
              <div>
                <label htmlFor="company_place_id" className="block mb-2 text-sm font-medium text-gray-900">Company Place ID</label>
                <input type="text" name="company_place_id" id="company_place_id" placeholder="Tt1wAtfYw2EBVnMs8" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-tprimary-600 focus:border-tprimary-600 block w-full p-2.5" required="" value={formData.company_place_id} onChange={changeHandler}/>
              </div>

              <button type="submit" className="w-full text-white bg-tprimary-600 hover:bg-tprimary-700 focus:ring-4 focus:outline-none focus:ring-tprimary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-20">Save</button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page