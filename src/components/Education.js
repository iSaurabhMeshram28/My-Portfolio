import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type="Bachelor of Engineering In Computer Science and Engineering" time="June 2022"
                        place="Prof. Ram Meghe College of Engineering and Management, Amravati"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence"
                    />
                    <Details
                        type="Online CourseWork" time="November 2022"
                        place="Mastering Data Structures & Algorithms using C and C++ - Udemy"
                        info="After completing this comprehensive course, I've gained mastery in fundamental data structures and algorithms, seamlessly navigating recursion, arrays, linked lists, stacks, queues, trees, and advanced concepts like AVL trees and graphs. Armed with practical knowledge of hashing techniques, this journey has equipped me to tackle complex programming challenges with confidence and precision.
                        "
                    />

                    <Details
                        type="Online CourseWork" time="August 2022"
                        place="React - The Complete Guide (incl. React Router & Redux) - Udemy"
                        info="After completing an extensive React.js course, I've honed my skills in crafting dynamic UIs, utilizing components, React Hooks, and mastering Redux and Next.js. This hands-on journey equips me to seamlessly implement user input, authentication, and animations in real-world projects, showcasing a robust proficiency in React development."
                    />


                </ul>
            </div>
        </div>
    )
}

export default Education