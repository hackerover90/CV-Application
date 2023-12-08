import { useState } from 'react'
import Header from './Header'

function Resume({ text }) {
    return (
        <>
            <div className='resume-template'>
                <Header text={text} />
            </div>
        </>
    )
}

export default Resume