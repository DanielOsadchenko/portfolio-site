import AboutSection from '@/components/AboutSection/AboutSection'
import Header from '@/components/Header/Header'
import ProjectSection from '@/components/ProjectsSection/ProjectsSection'
import ContactsSection from '@/components/ContactsSection/ContactsSection'
export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <ProjectSection />
        <AboutSection />
        <ContactsSection />
      </main>
    </>
    
    
  )
}
