import './App.scss';
import Header from './components/header/Header'
import MainPanel from './components/mainPanel/MainPanel';
import SidePanel from './components/sidePanel/SidePanel'

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
              <SidePanel />
              <MainPanel />
          </div>

        </div>
        <div className="banner"></div>
      </div>

    </div>
  );
}

export default App;
