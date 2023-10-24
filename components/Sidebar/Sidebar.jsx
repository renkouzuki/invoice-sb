import React, { useCallback, useEffect, useState } from 'react'
import {motion} from 'framer-motion'

// react-icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { useRouter } from 'next/router';
import Submenu from './Submenu';

const Sidebar = () => {
  const router = useRouter()

  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen , setIsOpen] = useState(isTab ? false : true)

  const Sidebar_animation = isTab ? {
    open: {
      x:0,
      width: "16rem",
      transition: {
        damping:40,
      },
    },
    closed: {
      x:-250,
      width: 0,
      transition: {
        damping:40,
        delay:0.15,
      },
    },
    
  } : {
    open: {
      width: "16rem",
      transition: {
        damping:40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping:40,
      },
    },
    
  }
  
  useEffect(()=>{
    if(isTab){
      setIsOpen(false)
    } else{
      setIsOpen(true)
    }
  },[isTab])

 
  const subMenusList = [
    {
      name:"build",
      icon: RiBuilding3Line,
      menus:["auth","app settings","storage","hosting"],
    },{
      name:"analytics",
      icon: TbReportAnalytics,
      menus:["dashboard","realtime","events"],
    }
  ]


  return (
    <div>
      <div onClick={()=>setIsOpen(false)} className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${isOpen ? "block" : "hidden"}`}>

      </div>
      <motion.div 
      variants={Sidebar_animation}
      initial={{x: isTab ? -250 : 0}}
      animate={isOpen? "open" : "closed"}
      className='bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed '>
        {/*****Logo*****/}
        <div className='flex items-center gap-.5 font-medium border-b border-slate-300 py-3 mx-3'>
          <img src='https://freepngimg.com/download/anime/10-2-anime-png-images.png' alt=".." width={45}/>
          <span className='text-xl whitespace-pre'>Anime</span>
        </div>
        {/*****Menus*****/}
        <div className='flex flex-col h-full'>
          {/*first*/}
          <ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white
           scrollbar-thumb-slate-100 h-[70%] md:h-[68%]'>
          
                <li>
                  <div className='link active' onClick={() => router.push("/AllApps")}>
                    <AiOutlineAppstore size={23} className='min-w-max'/>
                    AllApps
                    </div>
                </li>
                <li>
                  <div className='link ' onClick={() => router.push("/Authentication")}>
                    < BsPerson size={23} className='min-w-max'/>
                    Authentication
                    </div>
                </li>
                <li>
                  <div className='link ' onClick={() => router.push("/Storage")}>
                    < HiOutlineDatabase size={23} className='min-w-max'/>
                    Storage
                    </div>
                </li>
                {
                  (isOpen || isTab) && (
                    <div className='border-y py-5 border-slate-300'>
                    <small className='pl-3 text-slate-500 inline-block mb-2'>Product categories</small>
                    {
                      subMenusList?.map((menu)=>{
                        return(
                          <div key={menu.name} className='flex flex-col gap-1'>
                             <Submenu data={menu}/>
                          </div>
                        )
                      })
                    }
                   
                  </div>
                  )
                }

               

                <li>
                  <div className='link active' onClick={() => router.push("/Setting")}>
                    < SlSettings size={23} className='min-w-max'/>
                    Setting
                    </div>
                </li>
           
           {/*second*/}
           {
            isOpen && <div className='flex-1 text-sm z-50 max-h-48 my-auto
            whitespace-spre w-full font-medium'>
              <div className='flex items-center justify-between border-y border-slate-300 p-4'>
                  <div>
                    <p>Hellow! ^^</p>
                    <small>Git:Renko_Uzuki</small>
                  </div>
                  <p className='text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl'>
                    Link
                  </p>
                </div>
            </div>
           }
          </ul>
        </div>

        {/*****button onclick controling*****/}
        <motion.div
        animate={
          isOpen ? {
            x : 0,
            y: 0,
          } : {
            x: -10,
            y: -200,
            rotate: 180,
          }
        }
     
        onClick={()=>setIsOpen(!isOpen)} className='absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden'>
          <IoIosArrowBack size={25}/>
        </motion.div>
      </motion.div>
      <div className='m-3 md:hidden' onClick={()=>setIsOpen(true)}>
        <MdMenu size={25}/>
      </div>
    </div>
  )
}

export default Sidebar