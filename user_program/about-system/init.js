los_config.temporary_cache = {
    config: {
        "name": "copyright",
        "window": {
            "title": "Copyright",
            "width": "500px",
            "height": "300px"
        },
        "single_window": true,
        "allow_full_screen": true
    },
    ui: `
<style>
    #hello_world {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        overflow: scroll;
    }

    #hello_world h1 {
        color: black;
    }
</style>

<div id="hello_world">
    <h1>© 2022 Lxc</h1>
</div>
`
};