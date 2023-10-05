import './App.css';
import AboutMe from './components/AboutMe';
import FirstPage from './components/FirstPage';
import Skills from './components/Skills';

const App: React.FC = () => {
  return (
    <>
      <FirstPage/>
      <AboutMe/>
      <Skills/>
    </>
  )
}

export default App;
