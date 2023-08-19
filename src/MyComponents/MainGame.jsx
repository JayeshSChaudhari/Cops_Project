import React from 'react'
import '../AllCSS/MainGame.css'
import {useState , useEffect} from 'react'






export default function MainGame() {

    useEffect(() => {
        const randomID = Math.floor(Math.random() * 4);
        console.log(randomID);
        setCompChoose(randomID);
    },[]);



    const [compChoose , setCompChoose]  = useState(null);

    

    
        
       

    
    
    
    



















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
                    <button ><p>Rock</p>
                    </button>
                    <button ><p>Paper</p>
                    </button>
                    <button ><p>Scissor</p>
                    </button>
                </div>



                <div className="details">
                    <p id="user_choice"></p>
                    <p id="comp_choice"></p>
                    <p id="result"></p>
                </div>
            </div>
        </>

    )
}
