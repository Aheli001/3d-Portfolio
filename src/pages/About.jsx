import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../Components/CTA/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm {" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Aheli Nandy
        </span>
      </h1>

      <div className='mt-5 text-slate-500'>
        <p>
          I'm a Full Stack Developer eager to explore Web3, building scalable applications with modern front-end, back-end, and blockchain technologies.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill, index) => (
            <div className='block-container w-20 h-20' key={index}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name}
                  className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 text-slate-500'>
          <p>
            I've collaborated with diverse teams, gaining hands-on experience in full-stack development while continuously learning and adapting to new technologies.
          </p>
        </div>

        <div className="mt-12 flex">

          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement key={experience.company_name} date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img src={experience.icon} alt={experience.company_name}
                      className='w-[80%] h-[100%] object-contain'
                    />
                  </div>
                }
                iconStyle={
                  {
                    backgroundColor: experience.iconBg,
                  }
                }
                contentStyle={{
                  borderBottom: '4px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>{experience.title}</h3>
                  <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'>{point}</li>
                  ))
                  }
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default About