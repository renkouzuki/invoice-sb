import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
    const router = useRouter()
    const {Id} = router.query
  return (
    <div>build/{Id}</div>
  )
}

export default index