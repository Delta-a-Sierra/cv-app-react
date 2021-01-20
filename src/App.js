import './App.scss';
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import Qualifications from './components/qualifications/Qualifications'
import Achievements from './components/achievments/Achievements'
import Skills from './components/skills/Skill'

function App() {
  return (
    <div className="App">
      <nav>
        <h1>CV App</h1>
      </nav>
      <div className="CvBody">
        <div className="banner"></div>
        <div className="bodyInner" >
          <Header />
          <div className="contentSplit">
            <div className="side">
              <Contact />
              <Qualifications />
              <Achievements />
              <Skills />

            </div>
            <div className="main">
    
            </div>
          </div>

        </div>
        <div className="banner"></div>
      </div>

    </div>
  );
}

export default App;
