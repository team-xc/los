los_config.underlying.basic.read = {
    file: (path, callback) => {
        const ajax = new XMLHttpRequest();
        ajax.overrideMimeType("application/json");
        ajax.open("get", path, true);
        ajax.onreadystatechange = () => {
            if (ajax.readyState === 4 && ajax.status === 200) {
                los_config.underlying.basic.method.callback(callback, ajax.responseText);
            }
        };
        ajax.send(null);
    }
};