import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  },[])

  if(loading){
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    )
  }
  else{
    // Value is just the index used to fetch a specific job. So if value = 0, its fetching the first job. Also, using destructuring to temporarily
    // store the values of the job with this index to be more easily accessible. Otherwise, you may have to do something like this
    // <p>{jobs[value].title}</p> instead of  <p>{title}</p>
    const {title, company, dates, duties} = jobs[value]
    return(
      <section className='section'>
        <div className='title'>
          <h2> Experience </h2>
          <div className='underline'></div>
          <div className='jobs-center'> 
            {/* button container */}
            {/* job info */}
          </div>
        </div>
      </section>
    )
  }
}

export default App
