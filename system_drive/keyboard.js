los_config.system_drive.keyboard.add_shortcut_keys = (shortcut_key, callback) => {
    los_config.system_drive.keyboard.listening_list.push({shortcut_key, callback});
};

window.addEventListener("keydown", function (e) {
    let key = e.key;
    let ctrl = e.ctrlKey;
    let shift = e.shiftKey;
    let alt = e.altKey;

    los_config.system_drive.keyboard.listening_list.forEach(item => {
        if (ctrl && item["shortcut_key"]["ctrl"] &&
            shift && item["shortcut_key"]["shift"] &&
            alt && item["shortcut_key"]["alt"] &&
            item["shortcut_key"]["key"] === key) {
            los_config.underlying.basic.method.callback(item["callback"]);
            return;
        }

        if (!ctrl && !item["shortcut_key"]["ctrl"] &&
            shift && item["shortcut_key"]["shift"] &&
            alt && item["shortcut_key"]["alt"] &&
            item["shortcut_key"]["key"] === key) {
            los_config.underlying.basic.method.callback(item["callback"]);
            return;
        }

        if (ctrl && item["shortcut_key"]["ctrl"] &&
            shift && item["shortcut_key"]["shift"] &&
            !alt && !item["shortcut_key"]["alt"] &&
            item["shortcut_key"]["key"] === key) {
            los_config.underlying.basic.method.callback(item["callback"]);
            return;
        }

        if (!ctrl && !item["shortcut_key"]["ctrl"] &&
            !shift && !item["shortcut_key"]["shift"] &&
            alt && item["shortcut_key"]["alt"] &&
            item["shortcut_key"]["key"] === key) {
            los_config.underlying.basic.method.callback(item["callback"]);
            return;
        }

        if (!ctrl && !item["shortcut_key"]["ctrl"] &&
            shift && item["shortcut_key"]["shift"] &&
            !alt && !item["shortcut_key"]["alt"] &&
            item["shortcut_key"]["key"] === key) {
            los_config.underlying.basic.method.callback(item["callback"]);
            return;
        }

        if (ctrl && item["shortcut_key"]["ctrl"] &&
            !shift && !item["shortcut_key"]["shift"] &&
            !alt && !item["shortcut_key"]["alt"] &&
            item["shortcut_key"]["key"] === key) {
            los_config.underlying.basic.method.callback(item["callback"]);
            return;
        }

        if (!ctrl && !item["shortcut_key"]["ctrl"] &&
            !shift && !item["shortcut_key"]["shift"] &&
            !alt && !item["shortcut_key"]["alt"] &&
            item["shortcut_key"]["key"] === key) {
            los_config.underlying.basic.method.callback(item["callback"]);
        }
    });
});