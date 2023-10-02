import AboutSection from '@/components/AboutSection/AboutSection'
import Header from '@/components/Header/Header'
import ProjectSection from '@/components/ProjectsSection/ProjectsSection'
export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <ProjectSection />
        <AboutSection/>
      </main>
      <footer>Footer</footer>
    </>
    
    
  )
}
