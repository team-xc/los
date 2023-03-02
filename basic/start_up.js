const system_configs = [
    "method",
    "error",
    "console",
    "color",
    "components",
    "dom",
    "images",
    "initialization",
    "load",
    "program",
    "read",
    "wallpaper",
    "user_program"
];

function load_config(src, callback) {
    const script = document.createElement("script");
    const head = document.getElementsByTagName("head")[0];
    script.type = "text/javascript";
    script.src = `basic/system/${src}.js`;
    script.onload = () => (callback && typeof (callback) === "function") && callback();
    head.appendChild(script);
}

load_config("config", () => {
    system_configs.forEach((config, index) => {
        load_config(config, index === system_configs.length - 1 ? () => {
            los_config.underlying.basic.method.sleep(() => {
                los_config.initialization?.start();
            }, 100);
        } : null);
    });
});

Array.prototype.remove = function (val) {
    const index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};