import './App.scss';
import Title from './components/title/Title'
import Contact from './components/contact/Contact'
import Qualifications from './components/qualifications/Qualifications'

function App() {
  return (
    <div className="App">
      <nav>
        <h1>CV App</h1>
      </nav>
      <div className="CvBody">
        <div className="banner"></div>
        <div className="bodyInner" >
          <Title />
          <div className="contentSplit">
            <div className="side">
              <Contact />
              <Qualifications />

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
