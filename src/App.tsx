import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import {config} from 'dotenv';

config();

function App() {
  
  
  
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-08-06&sortBy=popularity&apiKey=7beb72935e844c6ca619d4b80c7da0d2`)
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => {
      console.log(json.articles)
      setCards(json.articles)
    }
    )    //print data to console
    .catch(err => console.log('Request Failed', err));
    }

   , []);
  
  return (
    <div className="App">
      <NavBar />
        {cards.map(card => {
          return (  
            <Card content={card.content} heading={card.author} body={card.title} />
        )})}        
    </div>
  );
}

export default App;
