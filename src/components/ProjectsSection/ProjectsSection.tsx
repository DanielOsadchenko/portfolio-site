"use client"
import Masonry from 'react-masonry-css'
import SectionTitle from "../Titles/SectionTitle";
import Image from "next/image";
import projectsImg from "../../../public/projects.svg"
import linkWhite from "../../../public/linkWhite.svg"

import {projects} from "../../../data/projects"
export default function ProjectSection() {
  const breakpoints = {
    default: 3,
    1023: 2,
    500: 1
  }
  
  return (
    <div className="container mx-auto px-6 md:px-10 xl:px-20">
      <SectionTitle title={"Projects"} number={1} id={"#Projects"} />
      <div>
        <Masonry
  breakpointCols={breakpoints}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  <div><Image src={projectsImg} alt="Projects image" priority={true} className="w-full" /></div>
        {projects.map((project, index) => {
          return (<div key={index}>
            <div className="px-3 py-3 bg-cWhiteDark rounded-m">
              <h3 className="text-base text-cVioletLight font-medium mb-4">{project.title}</h3>
              <p className="text-cVioletLight text-sm font-light mb-6">{project.description}</p>
              <ul className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => {
                  return (<li key={index} className="px-2 py-1 bg-cWhite rounded-sm text-xs text-cVioletLight">{tag}</li>)
                })}
              </ul>
              <ul>
                <li><a href={project.githubLink} target="_blank" className="flex gap-2 justify-center w-full py-1 bg-cAccent text-sm text-cWhite rounded-m mb-4">View on Github<Image src={linkWhite} alt="link white" className="w-2 h-2 my-auto" /></a></li>
                <li><a href={project.liveLink} target="_blank" className="flex gap-2 justify-center w-full py-1 bg-cVioletLight text-sm text-cWhite rounded-m">View on site<Image src={linkWhite} alt="link white" className="w-2 h-2 my-auto" /></a></li>
              </ul>
        
            </div>
          </div>)
        })}
</Masonry>
        
        

      </div>
    </div>
  )
}