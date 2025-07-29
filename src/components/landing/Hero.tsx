import React from "react";
import { Link } from "react-router-dom";

import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Members from "../../components/landing/Members";

import user from '../../data/users_images/user1.jpeg'
import code from '../../data/codes/code.png'

import '../../assets/styles/components/landingpage.css'

const actions = [
  {id:1,icon:ModeCommentIcon, hover:"hover:text-sapphire",text:"Comment",color:"text-chrome"},
  {id:2,icon:FavoriteIcon, hover:"hover:text-candy",text:"Like",color:"text-chrome"},
  {id:3,icon:RepeatOnIcon, hover:"hover:text-sapphire",text:"Share",color:"text-chrome"},
  {id:4,icon:BookmarkIcon, hover:"hover:text-sapphire",text:"Save",color:"text-chrome"},

]

import { IconButton, Stack } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center py-10">
      <div className="w-full lg:w-[90%] mx-auto flex items-center justify-between lg:flex-row flex-col gap-4 " >

        {/* left hero section */}
        <div className="left w-full lg:w-1/2 flex flex-col gap-4 items-start justify-start">
            <div className="intro flex flex-col items-start">
                <h1 className="text-5xl lg:text-7xl text-white font-extrabold font-['impact'] flex items-end justify-end gap-2">
                    <span>Connect</span>
                    <span className="text-sapphire w-3 h-3 rounded-full bg-sapphire mb-1"></span>
                    <span className="text-sapphire">Code</span>
                    <span className="text-sapphire w-3 h-3 rounded-full bg-white mb-1"></span>
                </h1>
                <h1 className="text-5xl lg:text-7xl text-white font-extrabold font-['impact'] flex items-end justify-end gap-2">
                    <span>Collaborate</span>
                    <span className="text-sapphire w-3 h-3 rounded-full bg-sapphire mb-1"></span>
                </h1>
            </div>
            <div className="contents">
                <p className="text-white lg:text-lg text-sm ">The ultimate platform for developers to share knowledge, build projects, and grow their careers in tech communities.</p>
            </div>

            {/* cta */}
            <div className="w-full flex items-center justify-start gap-4">
              <button className="bg-sapphire border-[2px] border-sapphire cta-btn text-white font-fira-code p-3 font-bold rounded-sm">Join Now - It's Free</button>
              <Link to="" className="border-[2px] group border-white text-white font-fira-code p-3 font-bold rounded-sm flex items-center gap-4 justify-center hover:border-sapphire transition-all duration-300">
                <span className="w-6 h-6 flex items-center justify-center bg-white rounded-full group-hover:bg-sapphire transition-all duration-300">
                    <FontAwesomeIcon icon={faPlay} className="text-black group-hover:text-white transition-all duration-300"/>
                </span>
                <span className="lg:text-md text-sm group-hover:text-sapphire transition-all duration-300">Watch Demo</span>
              </Link>
            </div>

            {/* members */}
            <div className="w-full flex items-center justify-start gap-48 mt-2">
              <Members/>
              <p className="text-white font-fira-code text-md">Join <span className="text-sapphire text-lg">24,817+</span> developers worldwide</p>
            </div>
        </div>

        {/* right hero section */}
        <div className="lg:w-1/2 w-full min-h-[500px] flex items-center justify-center px-6">
            <div className="post-sample w-full relative">
              <div className="w-full flex flex-col gap-2 rounded-lg relative bg-dark800">

                {/* top */}
                <div className="rounded-t-lg top w-full p-2 flex items-center justify-start gap-3 bg-dark700">
                  <div className="snips flex items-center justify-center gap-2 " >
                    <span className="w-4 h-4 rounded-full bg-candy"></span>
                    <span className="w-4 h-4 rounded-full bg-sunflower"></span>
                    <span className="w-4 h-4 rounded-full bg-lime_green"></span>
                  </div>
                  <p className="text-chrome text-lg">#react-community</p>
                </div>

                {/* middle content */}
                <div className="w-full flex items-start justify-start gap-3 p-2 px-4 ">
                  <div className="left-content">
                    <div className="profile">
                      <img src={user} alt="" className="w-14 h-14 rounded-full object-cover object-top"/>
                    </div>
                  </div>
                  <div className="w-full right-content flex flex-col gap-0">
                    <div className="  flex items-center justify-between ">
                      <h1 className="text-md text-white font-fira-code inline-flex">Sarah Developer</h1>
                      <p className="text-chrome text-[10px]">12 hours ago</p>
                    </div>
                    <div className="title w-full">
                      <p className="text-md text-chrome font-plex-sans">Has anyone implemented React Server Components in Production Yet?.</p>
                      <div className="w-full border-l-[3px] border-sapphire rounded-md mt-2">
                        <img src={code} alt="" className="w-full h-full rounded-md"/>
                      </div>
                    </div>
                    <div className="actions w-full flex items-center justify-start gap-2 mt-3">
                      <Stack direction="row" spacing={1}>
                        {actions.map((action) => (
                          <IconButton key={action.id}  className={`${action.color} transition-all duration-300 ${action.hover}`}>
                            <action.icon />
                          </IconButton>
                        ))}
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;