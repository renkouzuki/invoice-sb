import React from 'react'

const AddItems = ({data}) => {
  return (

    <div className='mt-10'>
        <div>
        </div>
        <table>
            <thead>
                <tr>
                    {
                        data.thead.map((men) =>{
                            return(
                                <th key={men}>
                                    {men}
                                </th>
                            )
                        })
                    }
                </tr>
            </thead>
        </table>
    </div>
    
  )
}

export default AddItems