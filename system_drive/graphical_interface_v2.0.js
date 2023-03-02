los_config.system_drive.graphical_interface.set_graphical = (graphical_name, callback) => {
    const args = los_config.temporary_cache || [];
    los_config.underlying.basic.load?.init(`${graphical_name}`, res => {
        const main_window = los_config.underlying.basic.dom?.get_main_window();
        if (main_window) {
            main_window.innerHTML = res.ui;
        }
        los_config.underlying.basic.method.callback(callback(args));
    });
};