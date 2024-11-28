import React from 'react'

export default function DualSlider() {
    return (
        <div id='Slider-container' className='w-full h-full flex items-center justify-center'>
            <div className="w-96 h-16 bg-gray-600 rounded-md border-2 border-slate-200 p-2 shadow shadow-gray-400">
                <input type="range" name="" id="" min='0' max='1000' value='0' className='appearance-none bg-slate-300' />
                <input type="range" name="" id="" min='0' max='1000' value='1000' />
            </div>
        </div>
    )
}
