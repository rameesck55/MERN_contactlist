import React, { useState, useEffect } from 'react'
import Bottom from '../components/Bottom'
import Contctmain from '../components/Contctmain'
import './Home.css'
import { v4 as uuidv4 } from 'uuid';


function Home() {
  const [edit, setEdit] = useState([])

  const edittings = (daa) => {
    setEdit(daa)
    console.log(edit)
  }

  return (
    <div>
      <div> <Contctmain datasforeditting={edit} />  </div>
      <div><Bottom trans={edittings} /></div>
    </div>
  )
}

export default Home
