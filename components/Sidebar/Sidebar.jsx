import React, { useCallback, useState } from 'react'
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

const Sidebar = () => {
  const router = useRouter()
  const Sidebar_animation = {
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

  const [isOpen , setIsOpen] = useState(true)
  const [val , setVal] = useState('')

  const items = [
    {
      label:"All Apps",
      link:"/AllApps",
      icon:<AiOutlineAppstore size={23}/>
    },
    {
      label:"Analytics",
      link:"/Analytics",
      icon:<TbReportAnalytics size={23}/>
    },
    {
      label:"Authentication",
      link:"/Authentication",
      icon:<BsPerson size={23}/>
    },
    {
      label:"Build",
      link:"/Build",
      icon:<RiBuilding3Line size={23}/> 
    },
    {
      label:"Storage",
      link:"/Storage",
      icon:<HiOutlineDatabase size={23}/> 
    },
    {
      label:"Setting",
      link:"/Setting",
      icon:<SlSettings size={23} />
    },
  ]


  const handle = useCallback((e,i)=>{

    router.push(e)
    setVal(i)
  },[])

  return (
    <div>
      <motion.div 
      variants={Sidebar_animation}
      animate={isOpen? "open" : "closed"}
      className='bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed '>
        {/*****Logo*****/}
        <div className='flex items-center gap-2 font-medium border-b border-slate-300 py-3 mx-3'>
          <img src='https://freepngimg.com/download/anime/10-2-anime-png-images.png' alt=".." width={45}/>
          <span className='text-xl whitespace-pre'>Anime</span>
        </div>
        {/*****Menus*****/}
        <div className='flex flex-col h-full'>
          {/*first*/}
          <ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden'>
            {
              items.map((inv,i)=>{
                return(
                <li key={i}>
                  <div className={`link ${val === inv.label ? "active" : ""}`} onClick={() => handle(inv.link,inv.label)}>
                    {inv.icon}
                    {inv.label}
                    </div>
                </li>
                )
              })
            }
           {/*second*/}
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
    </div>
  )
}

export default Sidebar