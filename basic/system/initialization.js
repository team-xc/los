los_config.initialization = {
    start: () => {
        los_config.underlying.basic.load?.style("html { background: black; }");
        los_config.underlying.basic.load?.style("* { margin: 0; padding: 0; user-select: none; box-sizing: unset !important; font-family: \"Microsoft YaHei\",\"Segoe UI\", \"Lucida Grande\", Helvetica, Arial,sans-serif; line-height: 1.5; }");
        los_config.underlying.basic.load?.style("main { width: 100vw; height: 100vh; }");
        los_config.underlying.basic.load?.style("img { pointer-events:none; }");
        los_config.initialization?.power_on();
    },
    power_on: callback => {
        los_config.underlying.system_program?.run("power_on", callback);
    },
    error_page: (callback, args) => {
        los_config.underlying.system_program?.run("error_page", callback, args);
    },
    desktop: callback => {
        los_config.underlying.system_program?.run("desktop", callback);
    }
};