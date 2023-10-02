import Image from "next/image";
import linkImg from '../../../public/link.svg'
import headerCont from '../../../public/headeCont.svg'
const tags = {
  frontend: [
    "HTML",
    "CSS",
    "SASS",
    "Responsive/Adaptive design",
    "JavaScript",
    "Typescript",
    "React",
    "Redux",
    "Redux Toolkit",
    "Tailwind",
    "Emotion.js",
  ],
  backend: ["Node.js", "Express.js", "MongoDB"],
  tools: ["Git", "GitHub", "Next.js", "Webpack", "Vite", "RestAPI", "Postman"],
};

export default function Header() {
  return <header className="bg-headerBg bg-cover bg-center" >
    <div className="container mx-auto px-6 md:px-10 xl:px-20 py-6 md:py-10 xl:py-20" >
      <h1 className="text-cVioletDark text-mobName md:text-mobTab leading-none font-bold mb-3">Danylo Osadchenko</h1>
      <h2 className="text-cVioletDark text-2xl md:text-6xl font-light mb-4 md:mb-10">Fullstack developer</h2>
      <div className="xl:relative xl:flex xl:flex-row-reverse xl:items-center">
         <ul className="flex flex-wrap gap-2 md:gap-3 md:mb-24 xl:w-1/2 xl:mb-0 xl:ml-6">
        <li className="text-xs md:text-base font-medium text-cAccent px-2 md:px-3 py-1 md:py-2 border border-cAccent rounded-sm md:rounded-tabTag ">Frontend</li>
        {tags.frontend.map((tag, index) => <li key={index} className="text-xs md:text-base text-cVioletLight px-2 md:px-3 py-1 md:py-2 border border-cVioletLight rounded-sm md:rounded-tabTag ">{tag}</li>)}
        <li className="text-xs md:text-base font-medium text-cAccent px-2 md:px-3 py-1 md:py-2 border border-cAccent rounded-sm md:rounded-tabTag">Backend</li>
        {tags.backend.map((tag, index) => <li key={index} className="text-xs md:text-base text-cVioletLight px-2 md:px-3 py-1 md:py-2 border border-cVioletLight rounded-sm md:rounded-tabTag ">{tag}</li>)}
        <li className="text-xs md:text-base font-medium text-cAccent px-2 md:px-3 py-1 md:py-2 border border-cAccent rounded-sm md:rounded-tabTag">Tools</li>
        {tags.tools.map((tag, index) => <li key={index} className="text-xs md:text-base text-cVioletLight px-2 md:px-3 py-1 md:py-2 border border-cVioletLight rounded-sm md:rounded-tabTag ">{tag}</li>)}
      </ul>
      <nav className="w-3/4 md:w-full ml-auto  md:flex md:gap-5 md:items-center md:mb-20 xl:w-1/2">
        <Image  src={headerCont} alt="header content image" className="hidden md:block w-1/2 xl:w-full" priority={true}/>
        <ul className="flex flex-nowrap flex-col justify-end align-bottom w-full md:w-1/2 xl:absolute xl:bottom-0 xl:left-0 xl:bg-cWhiteTransp xl:backdrop-blur-xl xl:rounded-xl xl:w-1/3 xl:px-6 xl:py-6">
          <li><a href="#Projects" className="bg-cAccent text-sm rounded-m px-3 py-2 mt-4 text-cWhite flex justify-center  ">Projects <Image src={linkImg} alt="link" className="ml-3 w-2 h-2" /></a></li>
          <li><a href="#About" className="bg-cAccent text-sm rounded-m px-3 py-2 mt-4 text-cWhite flex justify-center  ">About me <Image src={linkImg} alt="link" className="ml-3 w-2 h-2" /></a></li>
          <li><a href="#" className="bg-cAccent text-sm rounded-m px-3 py-2 mt-4 text-cWhite flex justify-center ">Contacts <Image src={linkImg} alt="link" className="ml-3 w-2 h-2"/></a></li>

        </ul>
      </nav>

    </div>
     </div>
  
</header>
}