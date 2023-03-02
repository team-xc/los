los_config.temporary_cache = {
    ui: `
<style>
    #system_program_desktop_ui {
        position: relative;
        width: 100%;
        height: 100%;
        background: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    #wallpaper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    #desktop {
        position: relative;
        width: calc(100% - 40px);
        height: calc(100% - 60px);
        padding: 30px 20px;
        overflow: hidden;
        z-index: 2;
    }

    #bar {
        width: 100%;
        height: 45px;
        background: #f3f3f380;
        backdrop-filter: blur(13px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .selected_status {
        background: #f3f3f380;
        border-bottom: 2px solid #2e68a8 !important;
    }

    .bar_item {
        width: 37px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        margin-right: 10px;
        border-bottom: 2px solid transparent;
    }

    .bar_item:hover {
        background: #f3f3f380;
    }

    .start_menus_open {
        opacity: 1 !important;
        transform: translateX(-50%) translateY(0) !important;
    }

    #start_menus {
        width: 33%;
        height: 60%;
        border-radius: 8px;
        position: absolute;
        bottom: 53px;
        left: 50%;
        box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
        transform: translateX(-50%) translateY(150%);
        backdrop-filter: saturate(180%) blur(30px);
        background-color: #ffffffb8;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 20px;
        opacity: 0;
        transition: all .3s;
        z-index: 999;
    }

    #search {
        position: relative;
        width: 100%;
        height: 35px;
        background: white;
        border-radius: 4px;
        overflow: hidden;
    }

    #search input {
        width: calc(100% - 30px);
        height: 100%;
        border: none;
        outline: none;
        background: none;
        padding: 0 15px;
    }

    #search input:hover {
        border: none;
        outline: none;
    }

    #search .line {
        position: absolute;
        width: 100%;
        height: 2px;
        background: #2e68a8;
        bottom: 0;
        left: 0;
    }

    .app_item {
        width: 80px;
        height: 85px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        border: transparent dashed 1px;
        border-radius: 10px;
        overflow: hidden;
    }

    .app_item:hover {
        /*border: white dashed 1px;*/
        background-color: #ffffff50;
    }

    .app_item img {
        width: 64px;
        height: 64px;
    }

    .app_item span {
        font-size: 14px;
        color: white;
        padding-bottom: 2px !important;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 80px;
    }

    .app_window {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        border-radius: 10px;
        box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
        backdrop-filter: saturate(100%) blur(100px);
        background-color: #ffffffb8;
        overflow: hidden;
        z-index: 10;
    }

    .app_window .header {
        position: relative;
        width: 100%;
        height: 29px;
        backdrop-filter: saturate(180%) blur(30px);
        background-color: #ffffffb8;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        font-weight: bold;
        border-bottom: 1px solid #dfe0e1;
        color: #474848;
    }

    .app_window .header .window_btn {
        position: absolute;
        left: 8px;
        top: 0;
        height: 29px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .app_window .header .window_btn div {
        width: 10px;
        height: 10px;
        border-radius: 6px;
        margin-right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .app_window .header .window_btn div svg {
        width: 8px;
        height: 8px;
        opacity: 0;
    }

    .app_window .header .window_btn:hover svg {
        opacity: 1;
    }

    .app_window .header .window_btn .window_btn_close {
        background: #ed6a60;
        border: 1px solid #d56257;
    }

    .app_window .header .window_btn .window_btn_minimize {
        background: #f4be4e;
        border: 1px solid #d7a241;
    }

    .app_window .header .window_btn .window_btn_maximize {
        background: #63c956;
        border: 1px solid #61c455;
    }

    .app_window .body {
        width: 100%;
        height: 100%;
        overflow: hidden;
        flex: 1;
    }

    #bar_right {
        height: 45px;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 1001;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 20px;
    }

    #datetime {
        font-size: 12px;
        line-height: 1.2 !important;
        display: block;
        padding-top: 2px;
        text-align: end;
        font-family: initial !important;
    }
</style>

<div id="system_program_desktop_ui">
    <div id="wallpaper"></div>
    <div id="desktop"></div>
    <div id="bar"></div>
    <div id="bar_right">
        <span id="datetime"></span>
    </div>
    <div id="start_menus">
        <div id="search">
            <label>
                <input>
            </label>
            <div class="line"></div>
        </div>
    </div>
</div>
`
};