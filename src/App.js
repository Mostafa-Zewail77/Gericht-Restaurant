
import './App.css';
import { Navbar } from './components';
import { AboutUs, Chef, FindUS, Footer, Gallery, Header ,Intro,Laurels,Menu} from './containers';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUS />
      <Footer />
    </div>
  );
}

export default App;
