import './App.css';
import { Header } from './Components/Header';
import {ContactUs} from './Components/ContactUs'
import {MidSection} from './Components/MidSection'
import {Footer}  from './Components/Footer'
 
function App() {
  return (
    <div className="App">
       <Header/>
       <MidSection />
       <ContactUs />
       <Footer />
    </div>
  );
}

export default App;
