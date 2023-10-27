import React from 'react'
import { TextField } from '@mui/material'
const Inputlayout = ({key ,labeling,nameInput , onChangeFunc , vale}) => {
  return (
   
    
    <div key={key} className='col-span-3 lg:col-span-1  p-3'>
        <TextField  id="standard-basic" label={labeling} variant="standard" name={nameInput} value={vale} onChange={onChangeFunc}/>
        </div>
    
  )
}

export default Inputlayout