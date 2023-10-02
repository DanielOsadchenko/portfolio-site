import SectionSubTitle from "../Titles/SectionSubTitle";
import SectionTitle from "../Titles/SectionTitle";

export default function ProjectSection() {
  return (
    <div className="container mx-auto px-6 md:px-10 xl:px-20">
      <SectionTitle title={"Projects"} number={1} id={"#Projects"} />
      <SectionSubTitle title={"Certificates"} number={2.2}/>
    </div>
  )
}