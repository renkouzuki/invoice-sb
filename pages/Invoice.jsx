
import AddItems from '@/components/Layout/AddItems'
import Inputlayout from '@/components/Layout/Inputlayout'
import React ,{useCallback, useEffect, useState}from 'react'

const Invoice = () => {
  const [val ,setVal] = useState(
    {
      Name:"",
      Company:"",
      Phone:"",
      Email:"",
      Address:""
    }
  )
  const [invoice  ,setInvoice] = useState([])
  const [invoice1  ,setInvoice1] = useState([])
  const [trian , setTrian] = useState('')

  const changeVal = useCallback((e)=>{
    setVal({...val,[e.target.name]: e.target.value})
    console.log(val)
  },[val]) 

  const items = [
    {
      labeling:"NAME",
      name: "Name",
      vale: val.Name
    },
    {
      labeling:"COMPANY",
      name:"Company",
      vale: val.Company
    },
    {
      labeling:"PHONE",
      name:"Phone",
      vale:val.Phone
    },
    {
      labeling:"EMAIL",
      name:"Email",
      vale:val.Email
    },
    {
      labeling:"ADDRESS",
      name:"Address",
      vale:val.Address
    }
  ]

  const thead = [
    "No.",
    "Desc",
    "Size Cm",
    "Quantity",
    "Amount",
    "Total",
    "Remove"
  ]

  console.log(thead)


  const addingInvoice1 = useCallback(()=>{
    setInvoice(cur => {
      return[
        ...cur, {des: "" , szw: 0 , szh: 0 , sizee: 0 , quantity: 0 , unitprice: 0 ,totaling: 0}
      ]
    })
  },[])

  const addingInvoice2 =useCallback(()=>{
    setInvoice1(cur => {
      return[
        ...cur, {des: "" , quantiti:0 ,unitprice:0,totaling:0}
      ]
    })
  },[])

  const arrays = [
    {
      LabelName: ["Description" , "Size Cm" , "M2" , "Quantity" , "Unitprice"],
      arrayItem: invoice
    },
    {
      LabelName: ["Description","Quantiti","Unitprice","Totaling"],
      arrayItems:invoice1
    }
  ]
  useEffect(()=>{
    console.log(arrays)
  })

  return (
    <>
     <div className='mt-10'>
    <h1 className='bg-red-500 pl-5 text-white rounded-t-lg font-bold p-1'>
      CUSTOMER INFO
    </h1>
    <div className='grid grid-cols-3 lg:grid-cols-5 bg-white rounded-b-lg'>
    {
        items.map((inv,i)=>{
          return(
            <Inputlayout key={i} vale={inv.vale} labeling={inv.labeling} nameInput={inv.name} onChangeFunc={changeVal}/>
          )
        })
      }
    </div>
  </div>
  <div className='mt-10'>
    <h1 className='bg-red-500 pl-5 text-white rounded-t-lg font-bold p-1'>
      INVOICE STATUS
    </h1>
    <div className='grid grid-cols-3 lg:grid-cols-5 bg-white rounded-b-lg'>
    {
        items.map((inv,i)=>{
          return(
            <Inputlayout key={i} vale={inv.vale} labeling={inv.labeling} nameInput={inv.name} onChangeFunc={changeVal}/>
          )
        })
      }
    </div>
  </div>
      
    {
      /***************************** */
    }
    <select value={trian} onChange={(e) => setTrian(e.target.value)}>
      <option>m2</option>
      <option>m1</option>
    </select>
    <button onClick={addingInvoice1}>
      Add
    </button>
    <button onClick={addingInvoice2}>
      Add2
    </button>
    
    {
      trian === "m2"&& (
        <div>
          {
            invoice?.map((inv,i)=>{
              return(
                <div key={`m2${i}}`} className='flex'>
                  <input type="text" value={inv.des}/>
                  <input type="text" value={inv.szw}/>
                  <input type="text" value={inv.szh}/>
                  <input type="text" value={inv.sizee}/>
                  <input type="text" value={inv.quantity}/>
                  <input type="text" value={inv.unitprice}/>
                  <button>x</button>
                </div>
              )
            })
          }
        </div>
      )
    }
    {
      trian === "m1" && (
        <div>
          {
          invoice1?.map((inv,i)=>{
            return(
              <div key={`m1${i}`} className='flex'>
                <input type="text" value={inv.des}/>
                <input type="text" value={inv.quantiti}/>
                <input type="text" value={inv.unitprice}/>
                <input type="text" value={inv.totaling}/>
              </div>
            )
          })
        }
        </div>
      )
    }
    </>
  )
}

export default Invoice