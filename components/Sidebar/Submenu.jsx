import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {IoIosArrowDown} from 'react-icons/io'
const Submenu = ({data}) => {
    const router = useRouter()
    const [subMenuOpen , setSubMenuOpen] = useState(false)
  return (
    <>
    <li className='link' onClick={()=>setSubMenuOpen(!subMenuOpen)}>
        <data.icon size={23} className="min-w-max"/>
        <p className='capitalize flex-1'>{data.name}</p>
        <IoIosArrowDown className={`${subMenuOpen && 'rotate-180'} duration-200`}/>
    </li>
    <motion.ul 
    animate={
        subMenuOpen ?{
            height: "fit-content",
        }: {
            height:0,
        }
    }
    className='flex flex-col pl-14 text-[0.8rem] 
    font-normal overflow-hidden h-0'>
        {
            data.menus.map(men=>{
                return(
                    <li key={men}>
                        <div className='link !bg-transparent capitalize' onClick={()=>router.push(`/${data.name}/${men}`)}>{men}</div>
                    </li>
                )
            })
        }
    </motion.ul>
    </>
  )
}

export default Submenu