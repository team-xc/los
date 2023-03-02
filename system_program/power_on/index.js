los_config.underlying.basic.load.drive("graphical_interface_v2.0",
    () => los_config.system_drive?.graphical_interface?.set_graphical("system_program/power_on", () => {
        los_config.underlying.basic.load?.drives([
            "audio",
            "keyboard"
        ], () => {
            los_config.underlying.basic.method?.sleep(() => {
                los_config.underlying.basic.load?.style("#system_program_power_on_ui { cursor: none; }");
                let powered_on = false;

                los_config.system_drive.keyboard.add_shortcut_keys({key: "F2"}, () => {
                    los_config.console.isLog = true;
                    los_config.console.isLogStack = true;
                });

                los_config.system_drive.keyboard.add_shortcut_keys({key: "p"}, () => {
                    if (powered_on) {
                        return;
                    }
                    powered_on = true;
                    document.body.requestFullscreen().then(null);
                    los_config.underlying.basic.method?.sleep(() => {
                        const frame = document.getElementById("system_program_power_on_ui");
                        const progress = los_config.system_components?.progress();
                        if (progress) {
                            progress.element.style.marginTop = "50px";
                        }

                        if (frame) {
                            try {
                                frame.appendChild(los_config.system_components?.logo());
                                frame.appendChild(progress.element || null);
                            } catch (e) {
                            }
                        }

                        los_config.underlying.basic.method?.sleep(() => {
                            progress?.set_value(100);
                            los_config.system_drive.audio.play("boot_successful.wav", () => {
                                los_config.underlying.basic.method?.sleep(() => {
                                    los_config.initialization?.desktop();
                                }, 500);
                            });
                        }, 1000);
                    }, 1000);
                });
            }, 200);
        });
    })
);