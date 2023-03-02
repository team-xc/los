los_config.system_drive.audio.play = (src, callback) => {
    const audio = document.createElement("audio");
    audio.src = `global_audio/${src}`;
    audio.play().then(() => {
        los_config.underlying.basic.method.callback(callback);
    });
};