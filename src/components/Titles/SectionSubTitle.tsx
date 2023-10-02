interface IProps {
  title: string,
  number: number
}

export default function SectionSubTitle(props: IProps) {
  const { title, number } = props;
  return (<div className="flex flex-nowrap justify-between items-center py-6 md:py-8 xl:py-12">
    <h2 className="inline-block text-cVioletDark text-base md:text-lg xl:text-xl font-medium">{title}</h2>
    <div className="inline-flex flex-nowrap justify-center items-center ">
      <span className="text-cVioletDark text-2xl xl:text-3xl">{number}</span>
    </div>
  </div>)
}