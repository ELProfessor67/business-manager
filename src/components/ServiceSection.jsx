import React, { memo } from 'react'

const ServiceSection = () => {
  return (
    <section className="text-gray-600 body-font bg-primary">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Our Services</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Everything you need to run a digital business</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-white shadow-md p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-5 h-5" viewBox="1 1 18 18">
                    <path d="m14.584 1.617-4.625 2.89-4.626-2.312-4.624 2.3v13.888l4.625-2.313 4.625 1.157 4.625-1.734 4.625 1.734v-13.297l-4.625-2.313zm3.469 13.875-3.469-1.157-4.625 1.734-4.625-1.155-3.468 1.734v-11.562l3.468-1.734 4.625 2.312 4.625-2.891 3.469 1.734v10.985zm-7.805-8.665c-0.16 0-0.29 0.163-0.29 0.363v6.781c0 0.201 0.129 0.363 0.29 0.363 0.16 0 0.289-0.162 0.289-0.363v-6.781c0-0.2-0.129-0.363-0.289-0.363zm-4.625-1.734c-0.16 0-0.29 0.163-0.29 0.363v7.938c0 0.201 0.129 0.363 0.29 0.363 0.16 0 0.289-0.162 0.289-0.363v-7.938c0-0.2-0.129-0.363-0.289-0.363zm8.961 7.722c0 0.2 0.129 0.363 0.289 0.363s0.289-0.163 0.289-0.363v-7.937c0-0.2-0.129-0.364-0.289-0.364s-0.289 0.164-0.289 0.364v7.937z" fill="none" />
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Reviews</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Upgrade your online reputation with our Review Service! Genuine, tailored feedback boosts credibility and trust. Propel your business to new heights—contact us to enhance and manage your online presence effectively.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-white shadow-md p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-5 h-5" viewBox="1 1 18 18">
                    <path d="m10 1.529c-4.679 0-8.471 3.792-8.471 8.471 0 4.68 3.792 8.471 8.471 8.471 4.68 0 8.471-3.791 8.471-8.471 0-4.679-3.791-8.471-8.471-8.471m0 16.05c-4.18 0-7.579-3.399-7.579-7.579s3.399-7.579 7.579-7.579 7.579 3.399 7.579 7.579-3.399 7.579-7.579 7.579m4.348-7.579c0 0.245-0.201 0.446-0.446 0.446h-5c-0.246 0-0.446-0.201-0.446-0.446s0.2-0.446 0.446-0.446h5c0.244 0 0.446 0.201 0.446 0.446m0 2.675c0 0.245-0.201 0.446-0.446 0.446h-5c-0.246 0-0.446-0.201-0.446-0.446s0.2-0.445 0.446-0.445h5c0.244-1e-3 0.446 0.2 0.446 0.445m-6.954-2.675c0 0.245-0.2 0.446-0.446 0.446h-0.849c-0.245 0-0.446-0.201-0.446-0.446s0.201-0.446 0.446-0.446h0.849c0.246 0 0.446 0.201 0.446 0.446m0 2.675c0 0.245-0.2 0.446-0.446 0.446h-0.849c-0.245 0-0.446-0.201-0.446-0.446s0.201-0.445 0.446-0.445h0.849c0.246-1e-3 0.446 0.2 0.446 0.445m6.954-5.35c0 0.246-0.201 0.446-0.446 0.446h-5c-0.246 0-0.446-0.2-0.446-0.446 0-0.245 0.2-0.446 0.446-0.446h5c0.244 0 0.446 0.201 0.446 0.446m-6.954 0c0 0.246-0.2 0.446-0.446 0.446h-0.849c-0.245 0-0.446-0.2-0.446-0.446 0-0.245 0.201-0.446 0.446-0.446h0.849c0.246 0 0.446 0.201 0.446 0.446" />
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Listings</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">Optimize your online listings with our Listing Enhancement Service! Elevate your business visibility by tailoring your information for maximum impact. Boost your chances of securing online funds with a polished and compelling listing.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>



          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-white shadow-md p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">

                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-5 h-5" viewBox="0 0 19 19">
                    <path d="M17.657,2.982H2.342c-0.234,0-0.425,0.191-0.425,0.426v10.21c0,0.234,0.191,0.426,0.425,0.426h3.404v2.553c0,0.397,0.48,0.547,0.725,0.302l2.889-2.854h8.298c0.234,0,0.426-0.191,0.426-0.426V3.408C18.083,3.174,17.892,2.982,17.657,2.982M17.232,13.192H9.185c-0.113,0-0.219,0.045-0.3,0.124l-2.289,2.262v-1.96c0-0.233-0.191-0.426-0.425-0.426H2.767V3.833h14.465V13.192z M10,7.237c-0.821,0-1.489,0.668-1.489,1.489c0,0.821,0.668,1.489,1.489,1.489c0.821,0,1.488-0.668,1.488-1.489C11.488,7.905,10.821,7.237,10,7.237 M10,9.364c-0.352,0-0.638-0.288-0.638-0.638c0-0.351,0.287-0.638,0.638-0.638c0.351,0,0.638,0.287,0.638,0.638C10.638,9.077,10.351,9.364,10,9.364 M14.254,7.237c-0.821,0-1.489,0.668-1.489,1.489c0,0.821,0.668,1.489,1.489,1.489s1.489-0.668,1.489-1.489C15.743,7.905,15.075,7.237,14.254,7.237 M14.254,9.364c-0.351,0-0.638-0.288-0.638-0.638c0-0.351,0.287-0.638,0.638-0.638c0.352,0,0.639,0.287,0.639,0.638C14.893,9.077,14.605,9.364,14.254,9.364 M5.746,7.237c-0.821,0-1.489,0.668-1.489,1.489c0,0.821,0.668,1.489,1.489,1.489c0.821,0,1.489-0.668,1.489-1.489C7.234,7.905,6.566,7.237,5.746,7.237 M5.746,9.364c-0.351,0-0.638-0.288-0.638-0.638c0-0.351,0.287-0.638,0.638-0.638c0.351,0,0.638,0.287,0.638,0.638C6.384,9.077,6.096,9.364,5.746,9.364"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Messaging</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">Amplify your messaging across digital channels with our Messaging Enhancement Service! Tailor your communication for maximum impact and engagement. Elevate your brand's online presence, ensuring your message resonates with the right audience.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-white shadow-md p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Webchat</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Revolutionize your customer interactions with our WenChat Enhancement Service! Tailor your web chat experience for seamless communication. Elevate your brand's online engagement, ensuring real-time, personalized interactions.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-white shadow-md p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Social</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">Transform your social media presence with our Social Media Optimization Service! Elevate your brand visibility, engage your audience with compelling content, and foster genuine connections. Tailored strategies for platforms like Facebook, Instagram, and Twitter ensure maximum impact.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-white shadow-md p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-5 h-5" viewBox="1 1 18 18">
                    <path d="m16.254 3.399h-0.695v-0.347c0-0.576-0.467-1.042-1.041-1.042-0.576 0-1.043 0.467-1.043 1.042v0.347h-6.949v-0.347c0-0.576-0.467-1.042-1.042-1.042s-1.043 0.466-1.043 1.042v0.347h-0.694c-0.768 0-1.39 0.622-1.39 1.39v11.813c0 0.768 0.622 1.39 1.39 1.39h12.507c0.768 0 1.391-0.622 1.391-1.39v-11.813c0-0.768-0.624-1.39-1.391-1.39zm-2.084-0.347c0-0.192 0.154-0.348 0.348-0.348 0.191 0 0.348 0.156 0.348 0.348v0.347h-0.696v-0.347zm-9.034 0c0-0.192 0.156-0.348 0.348-0.348s0.347 0.156 0.347 0.348v0.347h-0.695v-0.347zm11.813 13.55c0 0.384-0.311 0.694-0.695 0.694h-12.507c-0.384 0-0.695-0.311-0.695-0.694v-9.034h13.897v9.034zm0-9.728h-13.897v-2.085c0-0.383 0.311-0.695 0.695-0.695h12.507c0.385 0 0.695 0.312 0.695 0.695v2.085zm-11.465 4.863c0.576 0 1.042-0.467 1.042-1.042 0-0.576-0.467-1.043-1.042-1.043s-1.042 0.467-1.042 1.043c-1e-3 0.576 0.466 1.042 1.042 1.042zm0-1.389c0.192 0 0.347 0.155 0.347 0.348 0 0.191-0.155 0.348-0.347 0.348s-0.348-0.156-0.348-0.348c0-0.193 0.156-0.348 0.348-0.348zm9.034 1.389c0.574 0 1.041-0.467 1.041-1.042 0-0.576-0.467-1.043-1.041-1.043-0.576 0-1.043 0.467-1.043 1.043s0.466 1.042 1.043 1.042zm0-1.389c0.191 0 0.348 0.155 0.348 0.348 0 0.191-0.156 0.348-0.348 0.348-0.193 0-0.348-0.156-0.348-0.348 0-0.193 0.154-0.348 0.348-0.348zm0 4.864c0.574 0 1.041-0.467 1.041-1.043 0-0.575-0.467-1.042-1.041-1.042-0.576 0-1.043 0.467-1.043 1.042 0 0.576 0.466 1.043 1.043 1.043zm0-1.39c0.191 0 0.348 0.155 0.348 0.347s-0.156 0.348-0.348 0.348c-0.193 0-0.348-0.155-0.348-0.348 0-0.191 0.154-0.347 0.348-0.347zm-4.518 1.39c0.575 0 1.042-0.467 1.042-1.043 0-0.575-0.467-1.042-1.042-1.042-0.576 0-1.042 0.467-1.042 1.042 0 0.576 0.467 1.043 1.042 1.043zm0-1.39c0.192 0 0.348 0.155 0.348 0.347s-0.156 0.348-0.348 0.348-0.348-0.155-0.348-0.348c1e-3 -0.191 0.157-0.347 0.348-0.347zm-4.516 1.39c0.576 0 1.042-0.467 1.042-1.043 0-0.575-0.467-1.042-1.042-1.042s-1.042 0.467-1.042 1.042c-1e-3 0.576 0.466 1.043 1.042 1.043zm0-1.39c0.192 0 0.347 0.155 0.347 0.347s-0.155 0.348-0.347 0.348-0.348-0.155-0.348-0.348c0-0.191 0.156-0.347 0.348-0.347zm4.516-2.085c0.575 0 1.042-0.467 1.042-1.042 0-0.576-0.467-1.043-1.042-1.043-0.576 0-1.042 0.467-1.042 1.043s0.467 1.042 1.042 1.042zm0-1.389c0.192 0 0.348 0.155 0.348 0.348 0 0.191-0.156 0.348-0.348 0.348s-0.348-0.156-0.348-0.348c1e-3 -0.193 0.157-0.348 0.348-0.348z" fill="none" />
                  </svg>

                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Appointments</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Streamline your appointment process with our Appointment Management Service! Enhance efficiency by allowing clients to schedule seamlessly online. Elevate customer satisfaction with automated reminders and confirmations. Tailored solutions for various industries ensure a smooth appointment experience.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(ServiceSection)