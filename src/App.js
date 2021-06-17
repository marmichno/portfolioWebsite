import './styles/styles.scss'
import {HeroSection} from './components/hero/Hero';
import {AboutMe} from './components/AboutMe/AboutMe';
import {MySkills} from './components/mySkills/MySkills';
import {TechStack} from './components/techStack/TechStack';
import {Projects} from './components/projects/Projects';
import {ContactMe} from './components/contactMe/ContactMe';

function App() {
  
  return (
    <>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <TechStack></TechStack>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </>
  );
}

export default App;
