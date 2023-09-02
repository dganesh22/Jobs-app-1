import React from 'react'
import { NavLink } from 'react-router-dom'

function JobItem(props) {
    const { logo, postedAt, position, contract, company, location } = props
  return (
    <div className='job_item'>
        <img src={logo} alt="no image" />

        <div className="job_content">
            <h6>
                {postedAt} - { contract }
            </h6>
            <h1>
                <NavLink to={`/jobs/${position}`}> {position} </NavLink>
            </h1>

            <p> {company} </p>

            <div className="location">
                <p>
                    Location: <span> {location} </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default JobItem
