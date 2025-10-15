import React from 'react'
// import { BsCameraReels } from "react-icons/bs";
// import { FaUserFriends } from "react-icons/fa";
// import { IoMdNotificationsOutline } from "react-icons/io";
import { Leftbar } from './leftbar.jsx';
import { Livepost } from './livepost.jsx';
import { StoryBar } from './storyBar.jsx'


export const Navbar = () => {
    return (
        <>
            <div className="overflow-x-auto">
                <div class="grid grid-cols-12 gap-4 h-[400px] overflow-y-auto border-r">

                    <div class="col-span-3">
                        <Leftbar />
                    </div>
                    <div class="col-span-6 ">
                        <div>
                            <Livepost />
                        </div>
                        <div>
                            <StoryBar />
                        </div>
                    </div>


                    <div class="col-span-3">

                    </div>

                </div>

            </div>

        </>
    )
}
