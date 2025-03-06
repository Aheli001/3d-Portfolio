import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from "../../assets/icons/index"

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className='mx-5 relative flex text-white flex-col gap-3 max-w-2xl pt-4 pb-12 px-8 neo-brutalism-blue'>
            <p className='font-medium sm:text-xl text-center'>
                {text}
            </p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} className='w-4 h-4 object-contain' />
            </Link>
        </div>
    )
}

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'> Aheli Nandy</span>👋
        </h1>
    ),
    2: (
        <InfoBox
            text="Experienced in Full Stack Development"
            link="/about"
            btnText="Know More"
        />
    ),
    3: (
        <InfoBox
            text="Worked on multiple projects over the years"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just few keystrokes away"
            link="/contact"
            btnText="Let's Connect"
        />
    )
}



const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo