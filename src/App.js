import './App.css'; // Importing CSS for styling
import React, { useState, useEffect } from 'react';

function App() {
  // State hooks to manage game data, selection, and total
  let [gamesIndex, setGamesIndex] = useState(0);
  let [games, setGames] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [selectedIndices, setSelectedIndices] = useState([]);
  let [total, setTotal] = useState(0);

  //Fetch data from json
  useEffect(() => {
    fetch('./data/Switch2Games.json')
      .then(res => res.json())
      .then(data => {
        console.log(data["games"]);
        setGames(data["games"]); // Set game data after fetch
        setIsLoading(false); // Stop loading after data is fetched
      })
  }, []);

  // Handlers for selecting a game and checking/unchecking a game
  const handleSelectChange = (event) => {
    setGamesIndex(event.target.value); // Update selected game index
  }

  const handleCheckChange = (event) => {
  const itemIndex = parseInt(event.target.value, 10);
  const itemPrice = games[itemIndex].price;

  if (event.target.checked) {
    setSelectedIndices(prev => [...prev, itemIndex].sort((a, b) => a - b));
    setTotal(prevTotal => prevTotal + itemPrice);
  } else {
    setSelectedIndices(prev => prev.filter(item => item !== itemIndex));
    setTotal(prevTotal => prevTotal - itemPrice);
  }
};

  if (isLoading) {
    return <div>Loading</div>; // Show loading message until data is fetched
  }

  return (
    <>
      <select value={gamesIndex} onChange={handleSelectChange}>
        {
          games.map((item, i) => (
            <option key={i} value={i}>
              {item.title} {/* List games in a dropdown */}
            </option>
          ))
        }
      </select>
      <br />
      {/* Display game details */}
      <span>Developer: </span><span><b>{games[gamesIndex].developer}</b></span>
      <span>Publisher: </span><span><b>{games[gamesIndex].publisher}</b></span>
      <br />
      <span>Release Date: </span><span><b>{games[gamesIndex].date} </b></span>
      <span>Price: $ </span><span><b>{games[gamesIndex].price}</b></span>
      <br />
      <a target="_blank" href={games[gamesIndex].store}>Nintendo Store</a>
      <br />
      {/* Display game image and overlay */}
      <div className="image-container">
        <img className="cover-image" src={"images/" + games[gamesIndex].cover} height="315" alt="Game Cover" />
        <div className="image-overlay">Only on Nintendo Switch 2</div>
      </div>

      {/* Display Trailer */}
      <iframe width="420" height="315" src={"https://www.youtube.com/embed/" + games[gamesIndex].trailer}></iframe>
      <br />
      <h2>Add games to cart</h2>
      {/* Display checkboxes for each game */}
      {
        games.map((item, i) => {
          return (
            <div key={"div_check_" + i}>
              <input key={"check_" + i} id={"game_" + i} type="checkbox" name="game" value={i} onChange={handleCheckChange} />
              <label key={"label_" + i} htmlFor={"game_" + i}>
                {item.title}
              </label>
            </div>
          )
        })
      }
      <h2>Games in cart | Total {total}</h2>
      {/* Display selected games in the cart */}
      {
        selectedIndices.map((index, i) => (
          <img key={"img_selected_" + i} src={"images/" + games[index].cover} height="150" />
        ))
      }
    </>
  );
}

export default App; // Exporting the component for use in the main application
