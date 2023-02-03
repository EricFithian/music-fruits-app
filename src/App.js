import './App.css';
import { useState } from 'react'
import SongList from './components/SongList';

function App() {
  // This is for what the user is adding now to the songs list
  const [newSong, setNewSong] = useState('')
  // This tracks all of the songs they have added so far
  const [songs, setSongs] = useState([])
  const [dog, setDog] = useState(null);
  console.log(songs)

  // I want to fetch a random dog from my free API
  // Ultimately, APIs are the only way to grab data in your app. The best is to use your own because your own API will allow you access, if you set the right CORS permissions, to not only get but also post and put and delete data too!
  function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => console.log(response))
  }
  console.log(dog)

  // I want a function that updates what I called newSong every time the user types something into the input
  const handleChange = (e) => {
    setNewSong(e.target.value)
  }

  // When the user submits the form by clicking the add a song button or by hitting enter, I want to update the songs to include what the new one they're adding is and then reset the new song they're adding to an empty string
  function handleClick(e) {
    console.log(newSong);
    // prevent the default of reloading the page in React because I never want react to be reloading pages anyways. It would defeat the purpose of what React is
    e.preventDefault();
    setSongs([...songs, newSong]);
    setNewSong('');
  }

  return (
    <>
      <h1>My Favorite Songs</h1>
      <form onSubmit={handleClick}>
        <input type="text" name="newSong" onChange={handleChange} value={newSong}></input>
        <button type="submit">Add a song</button>
      </form>
      <SongList songs={songs} handleClick={handleClick} />
      <h2>Random Dog:</h2>
      <button onClick={getRandomDog}>Get a Dog!</button>
      <img src={dog} alt="Dog picture"/>
    </>
  )
}

export default App;
