import './App.css';
import FirstPage from './components/FirstPage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

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
