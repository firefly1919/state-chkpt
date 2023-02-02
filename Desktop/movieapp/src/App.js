
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';

import Footer from './Components/Footer';
import ListCard from './Components/Listcard';
import { moviesData } from './Components/Assetes/Data';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
   <Navigation/> 
   <Home/>
   <ListCard data={moviesData}/>
   <Footer/>
    </div>
  );
}

export default App;
