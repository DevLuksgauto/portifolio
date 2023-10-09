import './App.css';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import FirstPage from './components/FirstPage';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

const App: React.FC = () => {
  return (
    <>
      <FirstPage/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App;
