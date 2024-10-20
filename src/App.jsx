
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import cardsData from './assets/cardsData';
import './index.css'; // Make sure the path is correct


function App() {
  return (
      <>
      <Navbar />
      <Hero />
      <Cards cards={cardsData}/>
      </>
      
    
  );
}

export default App;
//passing the data of the array as an javascript object 