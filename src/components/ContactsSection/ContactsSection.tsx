import SectionTitle from "../Titles/SectionTitle"
import Image from "next/image"
import contactsImg from "../../../public/contacts.svg"
import {socialMedia, contacts} from  "../../../data/contacts"
export default function ContactsSection() {
return ( <section className="container mx-auto px-6 md:px-10 xl:px-20">
  <SectionTitle title={"Contacts"} number={3} id={"Contacts"} />

  <div className="xl:w-3/4 xl:mx-auto">
    <div className="md:flex md:items-center md:mb-6">

    <Image src={contactsImg} alt="contacts" className="w-full md:w-1/4" />

  <ul className="flex flex-nowrap justify-between text-cVioletLight text-xs md:text-sm text-center mb-6 md:w-3/4 md:my-auto">
    
      {socialMedia.map((contact, index) => {
      return (<li key={index} className="md:w-1/4 ">
        <a href={contact.url} target="_blanc" className="contactLink" >
          <Image src={contact.image} alt={contact.name} className="md:w-3/4 md:mx-auto md:mb-2" />
          {contact.name}
        </a>
      </li>)
      })}
      
    </ul>
    
  </div>

  <ul className="flex flex-col flex-nowrap gap-3 mb-3 md:flex-row md:justify-between md:items-center md:mb-6">
    {contacts.map((contact, index) => {
      return (<li key={index}>
        <a href={contact.url} className="flex flex-nowrap gap-3 items-center ">
          <Image src={contact.image} alt={contact.name} />
          <span className="text-cVioletLight text-xs md:text-base">{contact.name}</span>
        </a>
      </li>)
    })}
  </ul>
  </div>
  </section>)
}