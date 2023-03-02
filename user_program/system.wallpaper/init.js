los_config.temporary_cache = {
    config: {
        "name": "wallpaper",
        "window": {
            "title": "Wallpaper Center",
            "width": "1000px",
            "height": "600px"
        },
        "single_window": true,
        "allow_full_screen": true
    },
    ui: `
<style>
    #wallpaper_content {
        width: calc(100% - 80px);
        height: calc(100% - 30px);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px 30px;
        overflow: scroll;
        background: #eeeff0;
    }

    #wallpaper_content img {
        width: 22%;
        height: 150px;
        object-fit: cover;
        border-radius: 15px;
        overflow: hidden;
        margin-top: 20px;
        border: 2px solid transparent;
        padding: 2px;
        pointer-events: unset !important;
    }

    #wallpaper_content img:hover {
        border: 2px solid #2e68a8;
    }
</style>

<div id="wallpaper_content"></div>
`
};