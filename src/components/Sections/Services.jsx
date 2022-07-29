import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import junkLottie from '../../assets/lotties/junk.json';

const ServiceList = [
    { label: 'Restoring decayed teeth', lottie: junkLottie },
    { label: 'Smile make-over', lottie: junkLottie },
    { label: 'Replacing missed teeth ', lottie: junkLottie },
]



function Service({ lottie, label }) {
    return (
        <div className="flex flex-col h-auto max-w-[350px] rounded-[50px] py-3 items-center justify-between gap-2 bg-azureishWhite">
            <div className="w-full max-h-[60%]">
                <Player autoplay loop src={lottie} className='w-full h-full object-contain' />
            </div>
            <p className='whitespace-nowrap mt-auto font-semibold text-lg text-textBlack'>{label}</p>
        </div>);
}


function Services() {
    return (
        <div className='w-full h-screen py-2 mt-3'>
            <div className="container flex flex-col items-center justify-center gap-10 mx-auto h-fit">
                <div className='w-full text-center font-semibold text-chineeseBlack text-xl'>
                    <h1 className='font-bold text-3xl'>Our Services</h1>
                </div>
                <div className='container grid grid-cols-3 place-items-center place-content-center gap-3 grid-rows-1 mx-auto'>
                    {
                        ServiceList.map((i, index) => {
                            return <Service key={index} {...i} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services