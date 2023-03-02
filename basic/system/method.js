los_config.underlying.basic.method = {
    callback: (callback, ...args) => {
        (callback && typeof (callback) === "function") && callback(...args);
    },
    sleep: (callback, duration) => {
        setTimeout(callback, duration);
    },
    interval: (callback, duration) => {
        setInterval(callback, duration);
    }
};