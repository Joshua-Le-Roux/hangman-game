import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useState } from 'react';
//reducer created to help with displaying the gifs
import {iterate} from '../Store/slice'
//array with all the gifs stored inside
import GifArray from './gifs'
//bootstrap styling the buttons
import { Button } from 'react-bootstrap';

//component to handle the alphabet letters
export default function Buttons (props) {
    //accessing state created to help cycle through the gif array which displays each hangman gif
    const arrayCycle = useSelector((state) => state.iterate.value)
    //to dispatch the updated state
    const dispatch = useDispatch();
    //useState to help with alerting a win
    const [display, setDisplay] = useState([])
    //props api passed from app.js is an array of the random word selected
    let splitword = props.api

    //this function handles the onclick for the alphabet letters
    function clicked () {

        //this only runs when splitword is no longer empty
        if (splitword !== '') {
            //function the find the index positions of the selected letter
            function find() {
                let empt = []
                let spltArray = splitword.indexOf(props.id)
                //if that letter is not found in the word array, an array containing -1 is returned
                if (spltArray === -1) {
                empt.push(spltArray)
                }
                //if the letter(s) is found, the index(s) of these are returned
                while (spltArray !== -1) {
                    empt.push(spltArray)
                    spltArray = splitword.indexOf(props.id, spltArray + 1)
                }
                return empt
            }
            //if statement for correct guesses
            if (find()[0] !== -1) {
                //for loop cycles through the index(s) find() returns and alters certain styling 
                for (let i = 0; i < find().length; i++) {
                    let found = []
                    found.push(find()[i])
                    //button clicked turns green
                    let button = document.getElementById(`${props.id}`)
                    button.style.backgroundColor = "green"
                    //the underscore displayed above is replaced with the correct word found
                    let undrscrX2 = document.getElementsByClassName(`${splitword[found[0]]}`)[i]
                    undrscrX2.innerHTML = `${splitword[found[0]]}`
 
                }
                //using the earlier defined useState to grab each underscore element and put them in an array
                for (let x = 0; x < splitword.length; x++) {
                const undrscr = document.getElementsByClassName(`${splitword[x]}`)
                setDisplay(display.push(undrscr[0].innerHTML))
                console.log(display)
                }
                //joining these separated array elements into a string
                const stringDisplay = display.join()
                //joining the separated word array into a string and if the two are equal, user wins
                if(stringDisplay === splitword.join()) {
                    alert("Congratulations! You have won !")
                }
            }
            //else if for incorrect guesses
            else if (find()[0] == -1){
                //changes selected button to red
                let button = document.getElementById(`${props.id}`)
                button.style.backgroundColor = "red"  
                //makes the img element which displays the hangman graphic visible              
                let img = document.getElementById('hangman')
                img.style.visibility = 'visible'
                //using the intial state as a index marker to cycle through the gifarray
                img.src = `${GifArray[arrayCycle]}`
                //dispatching the reducer which now adds 1 to the initial state
                dispatch(iterate())
                //if inital state reaches the final gif at index 9, the game is declared a loss
                if (arrayCycle == 9) {
                    alert("You have lost :(")
                    //then the game restarts
                    window.location.reload(true)
                }
            } else {
                
            }

    } else {
        alert("no api call")
    }

    }

    return (
        // component which returns the button element to be used for each alphabet letter
        //props.id is the letter clicked, props.api is the word split()
        <Button onClick={clicked} key={props.id} id={props.id} api={props.api}>{props.id}</Button>
    )
}