import React, { useState } from 'react'
import jobs from '../../data/jobs'
import JobItem from '../Job_Item/JobItem'

function JobLists() {
    const [jobData,setJobData] = useState(jobs)

    const [searchTerm,setSearchTerm] = useState('')
    const [searchByLocation,setSearchByLocation] = useState('')


    const searchTermValue = searchTerm.toLowerCase()

    // search data by location
    const locationSearchHandler = () => {
        const filData = jobs.filter((item) => item.location.toLowerCase().includes(searchByLocation.toLowerCase()))
        setJobData(filData)
    }

    // filter job data - by part-time, full-time, freelance etc
    const filterJobData = (e) => {
        const fv = e.target.value
        if(fv === "full-time") {
            const fvData = jobs.filter((item) => item.contract === "Full Time")
            setJobData(fvData)
        } else if (fv === "part-time") {
            const fvData = jobs.filter((item) => item.contract === "Part Time")
            setJobData(fvData)
        } else if (fv === "freelance") {
            const fvData = jobs.filter((item) => item.contract === "Freelance")
            setJobData(fvData)
        } else if(fv === "contract") {
            const fvData = jobs.filter((item) => item.contract === "Contract")
            setJobData(fvData)
        } else {
            setJobData(jobs)
        }
    }



  return (
    <section className='job-list'>
        <div className="container">
            <div className="job_list_wrapper">
                <div className="search_panel">
                   <div className="search_panel_1">
                    <span>
                            <i className="ri-search-line"></i>
                        </span>
                        <input type="text" value={searchTerm} placeholder='Search By Title/Company' onChange={(e) => setSearchTerm(e.target.value)} />
                   </div>

                   <div className="search_panel_2">
                        <span>
                            <i className="ri-map-pin-line"></i>
                        </span>
                        <input type="text" placeholder="Search By Location" value={searchByLocation} onChange={(e) => setSearchByLocation(e.target.value)} />
                        <button className="btn" onClick={locationSearchHandler}>
                            Search
                        </button>
                   </div>

                   <div className="search_panel_3">
                        <select onChange={filterJobData}>
                            <option>Filter Job By</option>
                            <option value="full-time">Full-Time</option>
                            <option value="part-time">Part-Time</option>
                            <option value="freelance">FreeLance</option>
                            <option value="contract">Contract</option>
                        </select>
                   </div>
                </div>

                <div className="jobs_wrapper">
                    {
                        jobData?.filter((job) => {
                            if(searchTerm === "") return job;

                            if(job.position.toLowerCase().includes(searchTermValue) || job.company.toLowerCase().includes(searchTermValue)) return job;
                        }).map((item,index) => {
                            return <JobItem key={index} {...item} />
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default JobLists
