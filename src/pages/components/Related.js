import React from 'react'
import Dashboard from './Dashboard'

const Related = (props) => {
  return (
    <div className='flex w-full '>
        <Dashboard related={props.related} />
    </div>
  )
}

export default Related