import React from 'react'
import { FaFacebookMessenger } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
// import { BsCameraReels } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

export const Topbar = () => {
    return (
        <>
            <div className="flex flex-row mt-5">
                <div className="flex gap-4 text-3xl">
                    <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-700 cursor-pointer" />
                </div>
                <div className="ml-5 mr-5 bg-gray-300 w-56 rounded-lg p-1 flex items-center gap-2">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-700"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </span>
                    <span className="text-gray-700 text-sm font-medium">
                        Facebook Search
                    </span>
                </div>
                <div className='ml-52'>
                    <FontAwesomeIcon icon={faHouse} className="text-gray-700 w-6 h-6" />
                </div>

                <div className='ml-16'>
                    <FaUserFriends className=' w-6 h-6' />
                </div>
                <div className='ml-16  mr-56'>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M19.003 3A2 2 0 0 1 21 5v2h-2V5.414L17.414 7h-2.828l2-2h-2.172l-2 2H9.586l2-2H9.414l-2 2H3V5a2 2 0 0 1 2-2h14.003ZM3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Zm2-2.414L6.586 5H5v1.586Zm4.553 4.52a1 1 0 0 1 1.047.094l4 3a1 1 0 0 1 0 1.6l-4 3A1 1 0 0 1 9 18v-6a1 1 0 0 1 .553-.894Z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div className="ml-44">
                    <FaFacebookMessenger className="text-blue-500 w-6 h-6 hover:text-blue-400 cursor-pointer" />
                </div>
                <div className='ml-10'>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
                    </svg>

                </div>
                <div>
                    <div className='ml-10'>
                        <img src="https://media.gettyimages.com/id/108995677/photo/bangalore-india-mahendra-singh-dhoni-captain-of-india-poses-during-a-portrait-session-ahead-of.jpg?s=612x612&w=gi&k=20&c=1boHOKpbv98nHEXt9SO4-FZNaHIU3ysQRPzyuDfyxyE=" alt="" className='rounded-full object-cover  w-6 h-6' />
                    </div>

                </div>

            </div>
        </>
    )
}


