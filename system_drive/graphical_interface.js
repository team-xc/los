los_config.system_drive.graphical_interface.set_graphical = (graphical_name, callback) => {
    los_config.underlying.basic.read?.file(`${graphical_name}.html`, res => {
        const main_window = los_config.underlying.basic.dom?.get_main_window();
        if (main_window) {
            main_window.innerHTML = res;
        }
        los_config.underlying.basic.method.callback(callback);
    });
};