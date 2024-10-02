import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className='font-medium'>Speak<span className='text-blue-400 bold'>Shift</span></h1></a>
        </header>
    )
}
