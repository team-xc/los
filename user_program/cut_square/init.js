los_config.temporary_cache = {
    config: {
        "name": "cut square",
        "window": {
            "title": "Cut square",
            "width": "1000px",
            "height": "630px"
        },
        "single_window": true,
        "allow_full_screen": true
    },
    ui: `<style>
    #c {
        display: block;
        touch-action: none;
        transform: translateZ(0);
    }


    /*/////////////////////
    //        HUD        //
    /////////////////////*/


    .hud__score,
    .pause-btn {
        position: fixed;
        font-size: calc(14px + 2vw + 1vh);
    }

    .hud__score {
        top: 0.65em;
        left: 0.65em;
        pointer-events: none;
        user-select: none;
    }

    .cube-count-lbl {
        font-size: 0.46em;
    }

    .pause-btn {
        position: fixed;
        top: 0;
        right: 0;
        padding: 0.8em 0.65em;
    }

    .pause-btn > div {
        position: relative;
        width: 0.8em;
        height: 0.8em;
        opacity: 0.75;
    }

    .pause-btn > div::before,
    .pause-btn > div::after {
        content: '';
        display: block;
        width: 34%;
        height: 100%;
        position: absolute;
        background-color: #fff;
    }

    .pause-btn > div::after {
        right: 0;
    }

    .slowmo {
        position: fixed;
        bottom: 0;
        width: 100%;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.4s;
        will-change: opacity;
    }

    .slowmo::before {
        content: 'SLOW-MO';
        display: block;
        font-size: calc(8px + 1vw + 0.5vh);
        margin-left: 0.5em;
        margin-bottom: 8px;
    }

    .slowmo::after {
        content: '';
        display: block;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1.5vh;
        background-color: rgba(0, 0, 0, 0.25);
        z-index: -1;
    }

    .slowmo__bar {
        height: 1.5vh;
        background-color: rgba(255, 255, 255, 0.75);
        transform-origin: 0 0;
    }


    /*/////////////////////
    //       MENUS       //
    /////////////////////*/

    .menus::before {
        content: '';
        pointer-events: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #000;
        opacity: 0;
        transition: opacity 0.2s;
        transition-timing-function: ease-in;
    }

    .menus.has-active::before {
        opacity: 0.08;
        transition-duration: 0.4s;
        transition-timing-function: ease-out;
    }

    .menus.interactive-mode::before {
        opacity: 0.02;
    }


    /* Menu containers */
    .menu {
        pointer-events: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        user-select: none;
        text-align: center;
        color: rgba(255, 255, 255, 0.9);
        opacity: 0;
        visibility: hidden;
        transform: translateY(30px);
        transition-property: opacity, visibility, transform;
        transition-duration: 0.2s;
        transition-timing-function: ease-in;
    }

    .menu.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        transition-duration: 0.4s;
        transition-timing-function: ease-out;
    }

    .menus.interactive-mode .menu.active {
        opacity: 0.6;
    }

    .menus:not(.interactive-mode) .menu.active > * {
        pointer-events: auto;
    }


    /* Common menu elements */

    h1 {
        font-size: 4rem;
        line-height: 0.95;
        text-align: center;
        font-weight: bold;
        margin: 0 0.65em 1em;
    }

    h2 {
        font-size: 1.2rem;
        line-height: 1;
        text-align: center;
        font-weight: bold;
        margin: -1em 0.65em 1em;
    }

    .final-score-lbl {
        font-size: 5rem;
        margin: -0.2em 0 0;
    }

    .high-score-lbl {
        font-size: 1.2rem;
        margin: 0 0 2.5em;
    }

    button {
        display: block;
        position: relative;
        width: 200px;
        padding: 12px 20px;
        background: transparent;
        border: none;
        outline: none;
        user-select: none;
        font-family: monospace;
        font-weight: bold;
        font-size: 1.4rem;
        color: #fff;
        opacity: 0.75;
        transition: opacity 0.3s;
    }

    button::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.15);
        transform: scale(0, 0);
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
    }

    /* No \`:focus\` styles because this is a mouse/touch game! */
    button:active {
        opacity: 1;
    }

    button:active::before {
        transform: scale(1, 1);
        opacity: 1;
    }

    .credits {
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 20px;
    }

    a {
        color: white;
    }

    /* Only enable hover state on large screens */
    @media (min-width: 1025px) {
        button:hover {
            opacity: 1;
        }

        button:hover::before {
            transform: scale(1, 1);
            opacity: 1;
        }
    }
</style>

<!-- Game canvas -->
<canvas id="c"></canvas>

<!-- Gameplay HUD -->
<div class="hud">
    <div class="hud__score">
        <div class="score-lbl"></div>
        <div class="cube-count-lbl"></div>
    </div>
    <div class="pause-btn">
        <div></div>
    </div>
    <div class="slowmo">
        <div class="slowmo__bar"></div>
    </div>
</div>

<!-- Menu System -->
<div class="menus">
    <div class="menu menu--main">
        <h1>MENJA</h1>
        <button type="button" class="play-normal-btn">PLAY GAME</button>
        <button type="button" class="play-casual-btn">CASUAL MODE</button>
    </div>
    <div class="menu menu--pause">
        <h1>Paused</h1>
        <button type="button" class="resume-btn">RESUME GAME</button>
        <button type="button" class="menu-btn--pause">MAIN MENU</button>
    </div>
    <div class="menu menu--score">
        <h1>Game Over</h1>
        <h2>Your Score:</h2>
        <div class="final-score-lbl"></div>
        <div class="high-score-lbl"></div>
        <button type="button" class="play-again-btn">PLAY AGAIN</button>
        <button type="button" class="menu-btn--score">MAIN MENU</button>
    </div>
</div>
`
};