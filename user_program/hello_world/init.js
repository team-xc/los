los_config.temporary_cache = {
    config: {
        "name": "hello world",
        "window": {
            "title": "Hello world",
            "width": "500px",
            "height": "300px"
        },
        "single_window": false,
        "allow_full_screen": false
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
    <h1>Hello, World!</h1>
</div>
`
};