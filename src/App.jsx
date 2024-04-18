
// import { Link } from "react-router-dom";
import FullSize from './Components/FullSize/FullSize.jsx';

import './App.css';
import './Fonts/fonts.css';
import LeftSide from './Components/LeftSide/LeftSide.jsx';
import RightSide from './Components/RightSide/RightSide.jsx';
import Footer from './Components/Footer/Footer.jsx';
import imageBanner1 from './Assets/donation-banner1.png';

function App() {
  return (
    <FullSize>
      <div className="divisory">
        <LeftSide imgPath={imageBanner1} />
        <RightSide />
      </div>
      <Footer />
    </FullSize>
  )
}

export default App
