"use client"
import Image from "next/image"
import Masonry from 'react-masonry-css'
import about from '../../../public/about.svg'
import lang from '../../../public/lang.svg'
import goit from '../../../public/goit.png'
import udemy from '../../../public/udemy.png'
import epam from '../../../public/epam.png'
import college from '../../../public/college.png'
import univercity from '../../../public/univercity.png'
import education from '../../../public/education.svg'
import certifications from '../../../public/certifications.svg'
import SectionTitle from "../Titles/SectionTitle"
import SectionSubTitle from "../Titles/SectionSubTitle"
export default function AboutSection() {
  const breakpoints = {
    default: 2,
    500: 1
  }
  const breakpointsCert = {
    default: 3,
    1100:2,
    500: 1
  }
  return (<section className="container mx-auto px-6 md:px-10 xl:px-20">
    <SectionTitle title={"About me"} number={2} id={"About"} />
    <div className="md:flex md:justify-between md:align-middle md:gap-5">
      <Image src={about} alt="about" className="w-full md:w-1/2" loading="lazy" quality={80}/>
      <p className="text-cVioletDark text-sm md:text-base xl:text-xl font-light md:w-1/2 md:my-auto">I have a strong technical competence in Fullstack development with a focus on JavaScript, React, and Redux for the frontend, and Node.js, MongoDB, Express for the backend. My experience includes participation in the development of charitable projects, as well as team leader position in fast project and active involvement in project architecture. I possess skills in managing repositories on GitHub, deploying applications, and providing accurate time estimates for tasks. I have a work permit. I open to remote work also I open to relocate.</p>
    </div>

    <SectionSubTitle title={"Languages"} number={2.1} />
    <div className="md:flex md:flex-nowrap md:flex-row-reverse gap-5">
      <Image src={lang} alt="languages" className="w-full md:w-1/2" loading="lazy" quality={80}/>
      <ul className="md:w-1/2 md:my-auto">
        <li className="mb-3 xl:mb-6 flex flex-nowrap gap-3">
          <p className="inline-block py-1 md:py-3 bg-cVioletDarkTransp text-cWhite w-full text-xs md:text-sm xl:text-base text-center rounded-tl-sm rounded-bl-sm md:rounded-tl-m md:rounded-bl-m">English</p>
          <p className="inline-block py-1 md:py-3 bg-cVioletLightTransp text-cWhite w-full text-xs md:text-sm xl:text-base text-center rounded-tr-sm rounded-br-sm md:rounded-tr-m md:rounded-br-m">Intermediate / B1</p>
        </li>
        <li className="mb-3 xl:mb-6 flex flex-nowrap gap-3">
          <p className="inline-block py-1 md:py-3 bg-cVioletDarkTransp text-cWhite w-full text-xs md:text-sm xl:text-base text-center rounded-tl-sm rounded-bl-sm md:rounded-tl-m md:rounded-bl-m">Polish</p>
          <p className="inline-block py-1 md:py-3 bg-cVioletLightTransp text-cWhite w-full text-xs md:text-sm xl:text-base text-center rounded-tr-sm rounded-br-sm md:rounded-tr-m md:rounded-br-m">Intermediate / B1</p>
        </li>
        <li className="mb-3 xl:mb-6 flex flex-nowrap gap-3">
          <p className="inline-block py-1 md:py-3 bg-cVioletDarkTransp text-cWhite w-full text-xs md:text-sm xl:text-base text-center rounded-tl-sm rounded-bl-sm md:rounded-tl-m md:rounded-bl-m">Ukrainian</p>
          <p className="inline-block py-1 md:py-3 bg-cVioletLightTransp text-cWhite w-full text-xs md:text-sm xl:text-base text-center rounded-tr-sm rounded-br-sm md:rounded-tr-m md:rounded-br-m">Native / C2</p>
        </li>
      </ul>
    </div>
    <SectionSubTitle title={"Education"} number={2.2} />
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <div><Image src={education} alt="education" className="w-full" loading="lazy" quality={80}/></div>
      
      <div className="px-4 py-4 bg-cWhiteDark rounded-m">
        <h3 className="mb-2 text-sm text-cVioletDark md:text-base font-medium">Zaporizhzhia National University</h3>
        <h4 className="mb-2 text-sm text-cVioletDark md:text-base">Bachelor's Degree in Finance, Banking and Insurance</h4>
        <Image src={univercity} alt="univercity diploma" loading="lazy" quality={80}/>
      </div>

     
      <div className="px-4 py-4 bg-cWhiteDark rounded-m">
        <h3 className="mb-2 text-sm text-cVioletDark md:text-base font-medium">College of Economics and Law</h3>
        <h4 className="mb-2 text-sm text-cVioletDark md:text-base">Specialist in the Field of Finance</h4>
        <Image src={college} alt="college diploma" loading="lazy" quality={80} />
      </div>
      
       <div className="px-4 py-4 bg-cWhiteDark rounded-m">
        <h3 className="mb-2 text-sm text-cVioletDark md:text-base font-medium">GoIT School</h3>
        <h4 className="mb-2 text-sm text-cVioletDark md:text-base">Fullstack Developer (HTML, CSS, JavaScript, Node.js)</h4>
        <Image src={goit} alt="goit diploma" loading="lazy" quality={80}/>
      </div>

    </Masonry>


    <SectionSubTitle title={"Certifications"} number={2.3} />
    <Masonry
      breakpointCols={breakpointsCert}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <div><Image src={certifications} alt="certifications" className="w-full" loading="lazy" quality={80}/></div>
      
      <div className="px-4 py-4 bg-cWhiteDark rounded-m text-center">
        <h3 className="mb-2 text-sm text-cVioletDark md:text-base font-medium">Udemy Front-end Web Development Course</h3>
        <Image src={udemy} alt="udemy diploma" loading="lazy" quality={80}/>
      </div>

      <div className="px-4 py-4 bg-cWhiteDark rounded-m text-center">
        <h3 className="mb-2 text-sm text-cVioletDark md:text-base font-medium">EPAM IT Marathon</h3>
        <Image src={epam} alt="epam diploma" loading="lazy" quality={80} />
      </div>

    </Masonry>
    </section>)
}