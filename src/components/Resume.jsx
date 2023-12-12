import { useState } from 'react'
import Header from './Header'
import Body from './Body'

function Resume({ value, educations }) {
    return (
        <>
            <div className='resume-template'>
                <Header text={value} />
                <Body educations={educations} />
            </div>
        </>
    )
}

export default Resume