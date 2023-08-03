import './App.css';
//importing word generated via api
import Api from './Components/wordApi'
//importing restart and help buttons
import Footer from "./Components/Footer"
//importing the buttons component
import Buttons from './Components/Buttons'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  //useState to grab and set the api word, as well as the word split()
  const [words, setWords] = useState('')
  const [splitsWrd, setSplitWrd] = useState([])

  //useeffect which runs on start up calls the word api to generate the random word
  useEffect(() => {
    const apiCall = async () => {
      let apiWord = await Api
      console.log(apiWord)
      setWords(apiWord)
      //the word is then split and set via use state
      let apiSplit = await apiWord.split('')
      console.log(apiSplit)
      setSplitWrd(apiSplit)
    }
    apiCall()
  }, [])


  //the alphabet string which will be displayed
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const splitLetter = alphabet.split('')

  //variable which returns the pllaceholder underscores so user can see amount of letters in the word
  let placeHold = splitsWrd.map((idx) => {
    return(
      <h3 key={idx} className={idx}>_</h3>
    )
  })

  return (
    <div className="App">
      {/* underscores which will display the guesses */}
      {placeHold}
      <div>
        {/* img element which will display on incorrect guesses */}
        <br/>
        <img style={{visibility: "hidden"}} id='hangman' src='' alt="hangman-gif"/>
      </div>
      <div>
        {/* mapping throught the alphabet array to assign each button component to each button */}
      {splitLetter.map((letter) => {
        return (
          // defining on the props.id and props.api
          <Buttons id={letter} api={splitsWrd} />
        )
      })}
      </div>
      <br/>
      {/* displaying menu and help options */}
      <Footer />
    </div>
  );
}

export default App;
