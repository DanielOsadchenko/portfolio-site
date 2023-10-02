interface IProps {
  title: string,
  number: number,
  id: string
}

export default function SectionTitle(props: IProps) {
  const { title, number, id } = props;
  return (<div className="flex flex-nowrap justify-between items-center py-6 md:py-8 xl:py-12">
    <h2 id={id} className="inline-block text-cAccent text-xl xl:text-3xl font-bold">{title}</h2>
    <div className="inline-flex flex-nowrap justify-center items-center ">
      <span className="block bg-cAccent w-10 h-0.5 mr-3"> </span>
      <span className="text-cAccent text-3xl xl:text-5xl">{number}</span>
    </div>
  </div>)
}