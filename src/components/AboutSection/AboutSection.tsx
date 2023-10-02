import Image from "next/image"
import about from '../../../public/about.svg'
import lang from '../../../public/lang.svg'
import SectionTitle from "../Titles/SectionTitle"
import SectionSubTitle from "../Titles/SectionSubTitle"
export default function AboutSection() {
  return (<section className="container mx-auto px-6 md:px-10 xl:px-20">
    <SectionTitle title={"About me"} number={2} id={"About"} />
    <div className="md:flex md:justify-between md:align-middle md:gap-5">
      <Image src={about} alt="about" className="w-full md:w-1/2" />
      <p className="text-cVioletDark text-sm md:text-base xl:text-xl font-light md:w-1/2 md:my-auto">I have a strong technical competence in Fullstack development with a focus on JavaScript, React, and Redux for the frontend, and Node.js, MongoDB, Express for the backend. My experience includes participation in the development of charitable projects, as well as team leader position in fast project and active involvement in project architecture. I possess skills in managing repositories on GitHub, deploying applications, and providing accurate time estimates for tasks. I have a work permit. I open to remote work also I open to relocate.</p>
    </div>

    <SectionSubTitle title={"Languages"} number={2.1} />
    <div className="md:flex md:flex-nowrap md:flex-row-reverse gap-5">
      <Image src={lang} alt="languages" className="w-full md:w-1/2" />
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
    </section>)
}