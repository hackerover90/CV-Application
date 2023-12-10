import { useState } from 'react'
import Header from './Header'
import Body from './Body'

function Resume(props) {
    return (
        <>
            <div className='resume-template'>
                <Header {...props} />
                <Body />
            </div>
        </>
    )
}

export default Resume