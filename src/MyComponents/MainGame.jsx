import React from 'react'
import '../AllCSS/MainGame.css'






export default function MainGame() {




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
            <button onclick="checker('rock')">
                <i className="far fa-hand-rock"></i>
            </button>
            <button onclick="checker('paper')">
                <i className="far fa-hand-paper"></i>
            </button>
            <button onclick="checker('scissor')">
                <i className="far fa-hand-scissors"></i>
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
