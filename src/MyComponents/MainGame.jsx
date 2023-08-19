import React from 'react'
import '../AllCSS/MainGame.css'






export default function MainGame() {




    return (

        <>
            <div id="Screen">

                <p>Choose among - Rock , Paper & Scissor</p>



                <div className="GameBox">
                    <div id="displayCompAndUser">
                        <div>Played By Computer</div>
                        <div>Played by User</div>
                        <div id="CompPlayed">L</div>
                        <div id="UserPlayed">L</div>

                    </div>



                    <div id="ChooseOne">

                    </div>






                </div>


            </div>

        </>

    )
}
