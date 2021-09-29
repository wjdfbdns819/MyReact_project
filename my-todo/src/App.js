import './App.css';
import MainImage from "./image/Head.png"
import { BrowserRouter } from "react-router-dom"

import MainNav from './comps/MainNav';
import AllMain from './comps/AllMain';

function App() {

	// Header 이미지 스타일 지정
	const MainStyle = {

		// 경로 가져오기
	    backgroundImage: `url(${MainImage})`,
   	 	backgroundRepeat: `no-repeat`,
    	backgroundAttachment: `scroll`,
   	 	backgroundSize: "25%",

	};

  return (
    <div className="App">
      <header className="App-header" style={MainStyle}>
		<h1 className="App_title">My Todo &amp; Buket List</h1>
      </header>
		<BrowserRouter>
		 <MainNav/>
		 <AllMain/>
		</BrowserRouter>
    </div>
  );
}

export default App;
