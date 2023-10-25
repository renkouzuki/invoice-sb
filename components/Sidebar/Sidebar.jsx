import React, { useCallback, useEffect, useState } from 'react'
import {motion} from 'framer-motion'

// react-icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbFileInvoice} from "react-icons/tb";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { AiOutlineDollar } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { useRouter } from 'next/router';
import Submenu from './Submenu';

const Sidebar = () => {
  const router = useRouter()

  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen , setIsOpen] = useState(isTab ? false : true)
  const [val , setVal] = useState('')
  const [isHover , setIsHover] = useState(false)

  const Sidebar_animation = isTab ? {
    open: {
      x:0,
      width: "14rem",
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
      width: "14rem",
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
      name:"menu",
      icon: 0,
      menus:["Dashboard","Invoice","Quotation"],
    },{
      name:"management",
      icon: 0,
      menus:["Business","Employee","Customer","Product","Purhase","Payment"],
    },{
      name:"notifications",
      icon: 0,
      menus:["Billl Notification"]
    }
  ]

  const leftMenu = [
    {
      label:"Menu",
      menus:[
        {
          icon:LuLayoutDashboard ,
          name:"Dashboard",
          link:"/Dashboard"
        },
        {
          icon:LiaFileInvoiceDollarSolid ,
          name:"Invoice",
          link:"/Invoice"
        },
        {
          icon:TbFileInvoice,
          name:"Quotation",
          link:"/Quotation"
        }
      ]
    },
    {
      label:"Management",
      class:"pt-5",
      menus:[
        {
          icon:MdOutlineBusinessCenter ,
          name:"Business",
          link:"/Business"
        },
        {
          icon:IoPeopleOutline ,
          name:"Employee",
          link:"/Employee"
        },
        {
          icon:MdPeopleOutline,
          name:"Customer",
          link:"/Customer"
        },
        {
          icon: BsBoxSeam,
          name:"Product",
          link:"/Product"
        },
        {
          icon: BiPurchaseTagAlt,
          name:"Purchase",
          link:"/Purchase"
        },
        {
          icon:AiOutlineDollar,
          name:"Payment",
          link:"/Payment"
        },
      ]
    },
    {
      label:"Notification",
      class:"pt-5",
      menus:[
        {
          icon:IoMdNotificationsOutline ,
          name:"Bill Notification",
          link:"/Notification"
        },
      ]
    },
    
  ]
  

  const handle = (e ,i) =>{
    //router.push(e)
    setVal(i)
  }

 

  return (
    <div>
      <div onClick={()=>setIsOpen(false)} className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${isOpen ? "block" : "hidden"}`}>

      </div>
      <motion.div 
      variants={Sidebar_animation}
      initial={{x: isTab ? -250 : 0}}
      animate={isOpen? "open" : "closed" }
      className='bg-[#1A3A57] text-gray shadow-xl z-[999] w-[14rem] max-w-[14rem] h-screen overflow-hidden md:relative fixed ' >
        {/*****Logo*****/}
        {/* border-b border-slate-300 flex items-center gap-.5 font-medium */}
        <div className={`pt-5 mx-3 ${isOpen === true ? "px-3" : ""}`}>
          <img src='/Untitled-1.png' alt=".." width-auto/>
          {/*<span className='text-xl whitespace-pre'>Anime</span>*/}
        </div>
        {/*****Menus*****/}
        <div className='flex flex-col h-full'>
          {/*first   px-2.5*/}
          <ul className='whitespace-pre  text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-[#1A3A57] 
           scrollbar-thumb-[#1A3A57]  h-[70%] md:h-[68%]'>
          
                {/*{
                  (isOpen || isTab) && (
                    <div className='border-y py-5 border-slate-300'>
                    <small className='pl-3 text-slate-500 inline-block mb-2'>Menu</small>
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
                }*/}

              {
                leftMenu?.map((inv,i)=>{
                  return(
                    <li key={i}>
                       {
                        (isOpen || isTab) && ( 
                          <div className={`pl-[10px] text-white ${inv.class}`}>
                            {inv.label}
                          </div>
                        )
                      }
                      {
                        inv.menus.map((ine,v)=>{
                          return(
                            <div key={v} className={`link  ${val === ine.link ? "active" : ""} ${val === ine.link? "text-red-500" : "text-white"}`} onClick={()=>handle(ine.link , ine.link)}>
                                < ine.icon size={23} className='min-w-max'/>
                                {ine.name}
                            </div>
                          )
                        })
                      }
                      
                    </li>
                  )
                })
              }    
              
           
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
            y: -10,
            rotate: 180,
          }
        }
     
        onClick={()=>setIsOpen(!isOpen)} className='absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden'>
          <IoIosArrowBack color="white" size={25}/>
        </motion.div>
      </motion.div>
      <div className='m-3 md:hidden ' onClick={()=>setIsOpen(true)}>
        <MdMenu  size={25} />
      </div>
    </div>
  )
}

export default Sidebar