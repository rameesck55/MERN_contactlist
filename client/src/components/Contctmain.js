import React, { useState, useEffect } from 'react'
import './Contctmain.css'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

function Contctmain({ datasforeditting }) {
  const [words, usewords] = useState({})

  const wordssaving = (events) => {
    const { name, value } = events.target
    usewords({ ...words, [name]: value })
  }

  const storewords = (event) => {
    console.log(words)
    event.preventDefault()
    axios.post("http://localhost:3000/contact/newlist", words).then((response) => {
      console.log(response.data)
      usewords(response.data.message)
      console.log(words)
    })
  }

  useEffect(() => {
    usewords(datasforeditting[0])
  }, [datasforeditting])

  const update = () => {
    axios.post(`http://localhost:3000/contact/update`, words).then((respo) => {
      console.log(respo)
      usewords(respo.data.message)
    })
  }

  return (
    <>
      {datasforeditting[0] ?

        <>
          <div className='mainbody'>
            <h1>Contact List</h1>
            <hr />
            <h4>Add Contct</h4>
            <label htmlFor="">Name:</label><input type="text" placeholder='Name' name='Name' value={words?.Name} onChange={wordssaving} /><br /><br />
            <label htmlFor="">Email:</label> <input name='id' value={words?._id} hidden></input> <input type="text" placeholder='Email' value={words?.Email} name='Email' onChange={wordssaving} /><br /><br />
            <button className='addbutton' onClick={update}>Update</button>
          </div>
        </>

        :

        <div className='mainbody'>
          <h1>Contact List</h1>
          <hr />
          <h4>Add Contact</h4>
          <label htmlFor="">Name:</label><input type="text" placeholder='Name' name='Name' onChange={wordssaving} /><br /><br />
          <label htmlFor="">Email:</label><input type="text" placeholder='Email' name='Email' onChange={wordssaving} /><br /><br />
          <button className='addbutton' onClick={storewords}>ADD</button>
        </div>

      }
    </>

  )
}
export default Contctmain
