import './App.css';
import { Header } from './Components/Header';
import {ContactUs} from './Components/ContactUs'
import {MidSection} from './Components/MidSection'
 
function App() {
  return (
    <div className="App">
       <Header/>
       <MidSection />
       <ContactUs />
    </div>
  );
}

export default App;
