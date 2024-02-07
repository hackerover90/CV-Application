import { useState } from 'react'
import Header from './Header'
import Body from './Body'

function Resume({ value, educations, experiences }) {
    return (
        <>
            <div className='resume-template'>
                <Header text={value} />
                <Body educations={educations} experiences={experiences} />
            </div>
        </>
    )
}

export default Resume