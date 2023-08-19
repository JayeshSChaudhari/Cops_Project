import React from 'react'
import '../AllCSS/MainGame.css'
import { useState, useEffect } from 'react'






export default function MainGame() {
    const [compChoose, setCompChoose] = useState("");
    const [userChose, setUserChoose] = useState(null);

    const [result, setResult] = useState(() => {

        if (((compChoose === 1) && (userChose === 2)) || ((compChoose === 2) && (userChose === 3)) || ((compChoose === 3) && (userChose === 1))) {
            //user wins
            setResult("User Won");
            
        }
        
        else if (((compChoose === 2) && (userChose === 1)) || ((compChoose === 3) && (userChose === 2)) || ((compChoose === 1) && (userChose === 3))) {
            //comp wins
            setResult("Computer Won");
        }
        else {
            //tie
            setResult("Tie");
        }
    }
    )

    useEffect(() => {
        const randomID = Math.floor(1 + Math.random() * 4);
        console.log(randomID);

        setCompChoose(randomID);
        console.log(compChoose);
    }, []);




    function choseRock() {
        setUserChoose(1);
        console.log(userChose);

    }
    function chosePaper() {
        setUserChoose(2);
        console.log(userChose);

    }
    function choseScissor() {
        setUserChoose(3);
        console.log(userChose);

    }



    /*
    
    1 rock
    2 paper
    3 scissor
    
     */


























    return (

        <>


            <div className="container">
                <div className="scores">
                    <p>Computer :
                        <span id="computer_score">0</span>
                    </p>
                    <p>
                        You :
                        <span id="user_score">0</span>
                    </p>
                </div>
                <div className="weapons">
                    <button id='choseRock' onClick={() => choseRock()}><p>Rock</p>
                    </button>
                    <button id='chosePaper' onClick={() => chosePaper()}><p>Paper</p>
                    </button>
                    <button id='choseScissor' onClick={() => choseScissor()}><p>Scissor</p>
                    </button>
                </div>



                <div className="details">
                    <p id="user_choice"></p>
                    <p id="comp_choice"></p>
                    <p id="result">{result}</p>
                </div>
            </div>
        </>

    )
}
