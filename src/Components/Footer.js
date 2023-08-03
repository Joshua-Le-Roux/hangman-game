import { Button } from "react-bootstrap"

//footer component which will  display 'help' and 'restart' buttons
export default function Footer () {
    //function to display the rules to player
    const rules = () => {
        alert("The rules are simple: You have 10 chances to guess the correct word before the man is hanged, guess the correct word in less than 10 chances and win!")
    }
    //function to restart the game 
    const restart = () => {
        window.location.reload(true)
    }

    return (
        <div>
            {/* buttons and their onclick functions */}
            <Button className="footer" onClick={rules}>Help</Button><Button className="footer" onClick={restart} >Restart</Button>
        </div>
   
    )
}