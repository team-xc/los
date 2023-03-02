los_config.temporary_cache = {
    config: {
        "name": "greedy snake",
        "window": {
            "title": "Greedy snake",
            "width": "1000px",
            "height": "630px"
        },
        "single_window": true,
        "allow_full_screen": true
    },
    ui: `
<style>
    @font-face {
        font-family: "game";
        src: url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;800&display=swap");
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    button:focus {
        outline: 0;
    }

    html,
    body {
        height: 100%;
        font-family: "Poppins", sans-serif;
        color: #6e7888;
    }

    body {
        background-color: #222738;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #6e7888;
    }

    .container canvas {
        background-color: #181825;
    }

    .container {
        display: flex;
        width: 100%;
        height: 100%;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
    }

    #ui {
        display: flex;
        align-items: center;
        font-size: 10px;
        flex-flow: column;
        margin-left: 10px;
    }

    h2 {
        font-weight: 200;
        transform: rotate(270deg);
    }

    #score {
        margin-top: 20px;
        font-size: 30px;
        font-weight: 800;
    }

    .noselect {
        user-select: none;
    }

    #replay {
        font-size: 10px;
        padding: 10px 20px;
        background: #6e7888;
        border: none;
        color: #222738;
        border-radius: 20px;
        font-weight: 800;
        transform: rotate(270deg);
        cursor: pointer;
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    #replay:hover {
        background: #a6aab5;
        background: #4cffd7;
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    #replay svg {
        margin-right: 8px;
    }

    @media (max-width: 600px) {
        #replay {
            margin-bottom: 20px;
        }

        #replay,
        h2 {
            transform: rotate(0deg);
        }

        #ui {
            flex-flow: row wrap;
            margin-bottom: 20px;
        }

        #score {
            margin-top: 0;
            margin-left: 20px;
        }

        .container {
            flex-flow: column wrap;
        }
    }

    #author {
        width: 100%;
        bottom: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: inherit;
        text-transform: uppercase;
        padding-left: 35px;
    }

    #author span {
        font-size: 10px;
        margin-left: 20px;
        color: inherit;
        letter-spacing: 4px;
    }

    #author h1 {
        font-size: 25px;
    }

    .wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
</style>

<div class="container noselect">
    <div class="wrapper">
        <button id="replay">
            <i class="fas fa-play"></i>
            RESTART
        </button>
        <div id="canvas">

        </div>
        <div id="ui">
            <h2>SCORE
            </h2>
            <span id="score">00</span>
        </div>
    </div>
    <div id="author">
        <h1>SNAKE</h1> <span><p>小键盘方向键控制</p></span>
    </div>
</div>
`
};