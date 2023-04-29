import React from 'react'
import Dashboard from './Dashboard'

const Related = (props) => {
  return (
    <div className='flex justify-center  '>
        <Dashboard related={props.related} />
    </div>
  )
}

export default Related