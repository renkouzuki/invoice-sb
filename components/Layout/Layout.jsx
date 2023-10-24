import React, { Fragment } from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Layout = (props) => {
  return (
    <Fragment>
        <div className='flex gap-5'>
        <Sidebar/>
            <main className="max-w-5xl flex-1 mx-auto py-4">{props.children}</main>
        </div>
    </Fragment>
  )
}

export default Layout