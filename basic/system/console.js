console.log = (function (logFunc) {
    return function () {
        if (!los_config.console.isLog) {
            return;
        }
        try {
            let arr = [];
            arr.push(...arguments);
            arr.forEach((item, index) => {
                if (Object.prototype.toString.call(item) === "[object Object]" ||
                    Object.prototype.toString.call(item) === "[object Array]") {
                    arr[index] = JSON.parse(JSON.stringify(item));
                }
            });
            logFunc.call(console, ...arr);
            los_config.console.isLogStack ? console.trace() : null;
        } catch (e) {
            console.log(`a log error: ${e}`);
        }
    };
})(console.log);

window.console["assert"] = () => true;
window.console["warn"] = () => true;
window.console["count"] = () => true;
window.console["countReset"] = () => true;
window.console["debug"] = () => true;
window.console["dir"] = () => true;
window.console["dirxml"] = () => true;
window.console["error"] = () => true;
window.console["group"] = () => true;
window.console["groupCollapsed"] = () => true;
window.console["groupEnd"] = () => true;
window.console["info"] = () => true;
window.console["table"] = () => true;
window.console["time"] = () => true;
window.console["timeEnd"] = () => true;
window.console["timeLog"] = () => true;
window.console["timeStamp"] = () => true;
window.console["trace"] = () => true;
window.console["warn"] = () => true;

!los_config.console.isLog && los_config.underlying.basic.method.interval(() => !los_config.console.isLog && console.clear(), 500);