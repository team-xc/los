los_config.underlying.basic.load = {
    script_file: (src, callback) => {
        const script = document.createElement("script");
        const head = document.getElementsByTagName("head")[0];
        script.type = "text/javascript";
        script.src = `${src}.js`;
        // script.setAttribute("crossorigin", "true");
        script.onload = () => los_config.underlying.basic.method?.callback(callback);
        head.appendChild(script);
    },
    script_files: (src, callback) => {
        src.forEach((name, index) => {
            los_config.underlying.basic.load.script_file(name, index === src.length - 1 ? callback : null);
        });
    },
    style: css => {
        const style = document.createElement("style");
        try {
            style.appendChild(document.createTextNode(css));
        } catch (ex) {
            style.textContent = css;
        }
        const head = document.getElementsByTagName("head")[0];
        head.appendChild(style);
    },
    drive: (drive_name, callback) => {
        los_config.underlying.basic.load.script_file(`system_drive/${drive_name}`, callback);
    },
    drives: (drive_names, callback) => {
        drive_names.forEach((drive_name, index) => {
            los_config.underlying.basic.load.drive(drive_name, index === drive_names.length - 1 ? callback : null);
        });
    },
    init: (src, callback) => {
        los_config.underlying.basic.load.script_file(`${src}/init`, () => {
            los_config.underlying.basic.method?.callback(callback(los_config.temporary_cache));
        });
    }
};