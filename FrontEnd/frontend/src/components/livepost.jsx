import React from 'react'

export const Livepost = () => {
    return (
        <>
            <div className=' bg-slate-100 p-5 rounded-md w-[500px] h-[150px]'>
                <div className='flex'>
                    <div className='ml-0'>
                        <img src="https://media.gettyimages.com/id/108995677/photo/bangalore-india-mahendra-singh-dhoni-captain-of-india-poses-during-a-portrait-session-ahead-of.jpg?s=612x612&w=gi&k=20&c=1boHOKpbv98nHEXt9SO4-FZNaHIU3ysQRPzyuDfyxyE=" alt="" className='rounded-full object-cover  w-12 h-12' />
                    </div>
                    <div className="ml-7 mr-5 bg-gray-300 w-[400px]  rounded-lg p-1 flex items-center gap-2 p-3" >
                        <p>What is in your mind</p>
                    </div>
                </div>

                <div className='flex mt-8'>
                    <div className='ml-5 flex'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </div>
                        <div className='ml-3'>Live Video
                        </div>
                    </div>
                    <div className='ml-10  flex'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        </div>
                       <div className='ml-2'> Photo/Video</div>
                       </div>

                </div>
            </div>
        </>
    )
}
