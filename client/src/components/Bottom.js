import React, { useEffect, useState } from 'react'
import './Bottom.css'
import axios from 'axios'

function Bottom({ trans }) {
  const [store, setStore] = useState([])
  const [temp, SetTemp] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:3000/contact/outputlist").then((response) => {
      console.log(response.data.message)
      setStore(response.data.message)
      console.log(store)
    })
  }, [temp])

  const deleted = (id) => {
    console.log(id)
    axios.post(`http://localhost:3000/contact/delete/${id}`).then((response) => {
      console.log(response)
      SetTemp(!temp)
    })
  }

  const editt = (ids) => {
    axios.post(`http://localhost:3000/contact/select_edit/${ids}`).then((response) => {
      console.log(response.data.message)
      var transfer = response.data.message
      trans(transfer)
    })
  }

  return (

    <>
      {store.map((obj, index) =>
        <>

          <div className='bottommain'>
            <div><i id='iconsbottomcontact' class="fa fa-edit" aria-hidden="true" onClick={() => { editt(obj._id) }}></i></div>
            <div className='wordsdoc'>
              <p>{obj.Name}</p>
              <p>{obj.Email}</p>
            </div>
            <div><i id='iconsbottomdelete' class="fa fa-trash-o" aria-hidden="true" onClick={() => { deleted(obj._id) }}></i></div>
          </div>

        </>
      )}
    </>
  )
}

export default Bottom
