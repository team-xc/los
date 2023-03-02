los_config.system_drive.graphical_interface.set_graphical("system_program/desktop", () => {
    const frame = document.getElementById("system_program_desktop_ui");
    const wallpaper = document.createElement("img");
    wallpaper.style.width = "100%";
    wallpaper.style.height = "100%";
    wallpaper.style.objectFit = "cover";
    wallpaper.src = los_config.system_wallpaper?.[0] + ".jpg" || "";
    document.getElementById("wallpaper").appendChild(wallpaper);

    let current_z_index = 10;
    const program_task = {};
    let current_full_screen_app = "";

    const open_app = app_name => {
        los_config.underlying.basic.load?.init(`user_program/${app_name}`, res => {
            const app_config = res.config;
            let is_it_running = false;
            let id = null;
            Object.values(program_task).forEach(program => {
                if (program["name"] === app_name) {
                    id = program["id"];
                    is_it_running = true;
                }
            });

            if (app_config["single_window"] && is_it_running) {
                foreground_display(id);
                return;
            }

            id = `app_${new Date().getTime()}`;
            let app_window = `<div id="${id}" class="app_window" style="width: ${app_config["window"]["width"]}; height: ${app_config["window"]["height"]};">
                    <div class="header">
                        <span>${app_config["window"]["title"]}</span>
                        <div class="window_btn">
                            <div class="window_btn_close">
                                <svg class="icon" viewBox="0 0 1024 1024" width="8" height="8">
                                    <path
                                        d="M622.276923 508.061538l257.969231-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353846l-41.353846-41.353847c-11.815385-11.815385-29.538462-11.815385-41.353846 0L539.569231 425.353846c-7.876923 7.876923-19.692308 7.876923-27.569231 0L254.030769 165.415385c-11.815385-11.815385-29.538462-11.815385-41.353846 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L169.353846 793.6c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L512 618.338462c7.876923-7.876923 19.692308-7.876923 27.569231 0l257.969231 257.96923c11.815385 11.815385 29.538462 11.815385 41.353846 0l41.353846-41.353846c11.815385-11.815385 11.815385-29.538462 0-41.353846L622.276923 535.630769c-5.907692-7.876923-5.907692-19.692308 0-27.569231z"
                                        fill="#69110a">
                                    </path>
                                </svg>
                            </div>
                            <div class="window_btn_minimize">
                                <svg class="icon" viewBox="0 0 1024 1024" width="8" height="8">
                                    <path d="M78.633918 396.690788l858.20393 0 0 158.309562-858.20393 0 0-158.309562Z"
                                          fill="#8f591c">
                                    </path>
                                </svg>
                            </div>
                            <div class="window_btn_maximize">
                                <svg class="icon" viewBox="0 0 1024 1024" width="8" height="8"
                                     style="transform: scale(0.8) rotateX(180deg)">
                                    <path
                                        d="M260.556271 89.932242c224.154199 224.173642 448.252117 448.291003 672.362314 672.420643 27.927049-251.343445 55.935963-503.424694 84.051301-756.465804C763.723092 34.024931 511.672542 62.030775 260.556271 89.932242z"
                                        fill="#286117">
                                    </path>
                                    <path
                                        d="M4.885264 1017.972726c253.123998-28.123524 505.037425-56.111972 756.280586-84.026742C536.956392 709.7222 312.859497 485.61098 88.919169 261.655302 61.012585 512.815575 33.002648 764.909104 4.885264 1017.972726z"
                                        fill="#286117">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="body">${res.ui}</div>
                </div>`;
            frame.insertAdjacentHTML("beforeend", app_window);
            los_config.underlying.basic.load.script_file(`user_program/${app_name}/index`);
            program_task[id] = {
                id: id,
                name: app_name,
                icon: `user_program/${app_name}/icon.png`,
                foreground_display: true,
                is_full: false
            };

            app_window = document.getElementById(id);
            if (!app_config["single_window"]) {
                app_window.style.top = `${Object.keys(program_task).length * 50 + 50}px`;
                app_window.style.left = `${Object.keys(program_task).length * 50 + 50}px`;
            }

            add_app_task(id);
            foreground_display(id);

            app_window.onclick = () => {
                app_window.style.zIndex = ++current_z_index + "";
            };
            app_window.getElementsByClassName("window_btn_close")[0].onclick = () => {
                app_window.remove();
                document.getElementById(id + "_task").remove();
                delete program_task[id];
                bar.style.display = "flex";
                bar_right.style.display = "flex";
            };
            app_window.getElementsByClassName("window_btn_minimize")[0].onclick = () => {
                background_display(id);
                bar.style.display = "flex";
                bar_right.style.display = "flex";
            };
            let c_top = 0, c_left = 0;
            app_window.getElementsByClassName("window_btn_maximize")[0].onclick = () => {
                if (app_config["allow_full_screen"]) {
                    current_full_screen_app = id;
                    app_window.style.transition = "all .3s";
                    program_task[id]["is_full"] = !program_task[id]["is_full"];
                    foreground_display(id);
                    if (program_task[id]["is_full"]) {
                        c_top = app_window.style.top;
                        c_left = app_window.style.left;
                        bar.style.display = "none";
                        bar_right.style.display = "none";
                        app_window.style.top = "0";
                        app_window.style.left = "0";
                        app_window.style.width = "100%";
                        app_window.style.height = "100%";
                    } else {
                        bar.style.display = "flex";
                        bar_right.style.display = "flex";
                        app_window.style.top = c_top;
                        app_window.style.left = c_left;
                        app_window.style.width = app_config["window"]["width"];
                        app_window.style.height = app_config["window"]["height"];
                    }
                    los_config.underlying.basic.method.sleep(() => {
                        app_window.style.transition = "unset";
                    }, 300);
                }
            };

            app_window.children[0].onmousedown = function (event) {
                foreground_display(id);
                const diffX = event.clientX - app_window.offsetLeft;
                const diffY = event.clientY - app_window.offsetTop;
                document.onmousemove = function (event) {
                    let moveX = event.clientX - diffX;
                    let moveY = event.clientY - diffY;
                    if (moveX < 0) {
                        moveX = 0;
                    } else if (moveX > window.innerWidth - app_window.offsetWidth) {
                        moveX = window.innerWidth - app_window.offsetWidth;
                    }
                    if (moveY < 0) {
                        moveY = 0;
                    } else if (moveY > window.innerHeight - app_window.offsetHeight) {
                        moveY = window.innerHeight - app_window.offsetHeight;
                    }
                    app_window.style.left = moveX + "px";
                    app_window.style.top = moveY + "px";
                };
                document.onmouseup = function (event) {
                    this.onmousemove = null;
                    this.onmouseup = null;
                };
            };

            app_window.style.left = app_window.offsetLeft + "px";
            app_window.style.top = app_window.offsetTop + "px";
        });
    };

    const user_program = los_config.user_program;
    const desktop = document.getElementById("desktop");
    const col_n = 6;
    const refresh_desktop = () => {
        desktop.innerHTML = "";
        let app_ns = 0;
        let app_ns2 = 0;
        let c_t = 30;
        los_config.underlying.basic.method.sleep(() => {
            user_program.forEach(app => {
                const app_frame = document.createElement("div");
                app_frame.className = "app_item";
                app_frame.style.position = "absolute";
                app_frame.style.top = c_t + "px";
                app_frame.style.left = parseInt((app_ns2 / col_n).toString()) * 80 + (30 * parseInt((app_ns2 / col_n).toString())) + 30 + "px";
                const app_img = document.createElement("img");
                app_img.src = `user_program/${app}/icon.png` || "";
                const app_name = document.createElement("span");
                los_config.underlying.basic.load?.init(`user_program/${app}/`, res => {
                    app_name.innerText = res.config.name;
                });
                app_frame.appendChild(app_img);
                app_frame.appendChild(app_name);
                desktop.appendChild(app_frame);
                app_ns++;
                app_ns2++;
                if (app_ns >= col_n) {
                    c_t = 30;
                    app_ns = 0;
                } else {
                    c_t += 115;
                }
            });

            los_config.underlying.basic.method.sleep(() => {
                const apps = document.getElementsByClassName("app_item");
                for (let i = 0; i < apps.length; i++) {
                    let cloc = 0;
                    apps[i].onclick = e => {
                        e.preventDefault();
                        cloc++;
                        los_config.underlying.basic.method.sleep(() => {
                            cloc = 0;
                        }, 500);
                        if (cloc === 2) {
                            open_app(user_program[i]);
                        }
                    };
                }
            }, 200);
        }, 200);
    };

    refresh_desktop();

    const foreground_display = id => {
        document.getElementById(id).style.display = "flex";
        document.getElementById(id).style.zIndex = ++current_z_index + "";
        document.getElementById(id + "_task").className = "bar_item selected_status";
        program_task[id]["foreground_display"] = true;
        if (program_task[id]["is_full"]) {
            bar.style.display = "none";
            bar_right.style.display = "none";
        }
    };

    const background_display = id => {
        document.getElementById(id).style.display = "none";
        document.getElementById(id + "_task").className = "bar_item";
        program_task[id]["foreground_display"] = false;
    };

    const switch_start_menu = () => {
        start_menu.className = is_show_start_menu ? "bar_item" : "bar_item selected_status";
        start_menus.className = is_show_start_menu ? "" : "start_menus_open";
        is_show_start_menu = !is_show_start_menu;
    };

    let start_menu = null;
    let is_show_start_menu = false;
    const start_menus = document.getElementById("start_menus");
    const bar = document.getElementById("bar");
    const bar_right = document.getElementById("bar_right");
    const add_app_task = id => {
        const app_task_frame = document.createElement("div");
        const app_task_img = document.createElement("img");
        app_task_frame.className = "bar_item";
        app_task_frame.id = id + "_task";
        app_task_img.src = id === "start_menu" ? los_config.system_images?.logo || "" : program_task[id]["icon"];
        app_task_img.style.width = "31px";
        app_task_img.style.height = "31px";
        app_task_img.style.objectFit = "cover";
        if (id === "start_menu") {
            start_menu = app_task_frame;
            app_task_frame.onclick = () => {
                switch_start_menu();
            };
        } else {
            app_task_frame.onclick = () => {
                if (program_task[id]["foreground_display"]) {
                    background_display(id);
                } else {
                    foreground_display(id);
                }
            };
        }
        app_task_frame.appendChild(app_task_img);
        bar.appendChild(app_task_frame);
    };

    add_app_task("start_menu");

    const datetime = document.getElementById("datetime");
    const showtime = () => {
        let today, hour, second, minute, year, month, date;
        let strDate;
        today = new Date();
        const n_day = today.getDay();
        switch (n_day) {
            case 0: {
                strDate = "星期日";
                break;
            }
            case 1: {
                strDate = "星期一";
                break;
            }
            case 2: {
                strDate = "星期二";
                break;
            }
            case 3: {
                strDate = "星期三";
                break;
            }
            case 4: {
                strDate = "星期四";
                break;
            }
            case 5: {
                strDate = "星期五";
                break;
            }
            case 6: {
                strDate = "星期六";
                break;
            }
            case 7: {
                strDate = "星期日";
                break;
            }
        }

        year = today.getFullYear();
        month = today.getMonth() + 1;
        date = today.getDate();
        hour = today.getHours();
        minute = today.getMinutes();
        second = today.getSeconds();

        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (date >= 0 && date <= 9) {
            date = "0" + date;
        }
        if (hour >= 0 && hour <= 9) {
            hour = "0" + hour;
        }
        if (minute >= 0 && minute <= 9) {
            minute = "0" + minute;
        }
        if (second >= 0 && second <= 9) {
            second = "0" + second;
        }

        datetime.innerHTML = `${hour}:${minute}<br>${year}/${month}/${date}`;
        los_config.underlying.basic.method.sleep(showtime, 1000);
    };

    showtime();

    los_config.system_drive.keyboard.add_shortcut_keys({alt: true, key: "Alt"}, () => {
        switch_start_menu();
    });

    los_config.system_drive.keyboard.add_shortcut_keys({key: "F6"}, () => {
        refresh_desktop();
    });

    los_config.system_drive.keyboard.add_shortcut_keys({ctrl: true, key: "f"}, () => {
        if (program_task[current_full_screen_app]?.["is_full"]) {
            const header = document.getElementById(current_full_screen_app).children[0];
            if (header.style.display === "none") {
                header.style.display = "flex";
                document.getElementById(current_full_screen_app).style.borderRadius = "10px";
            } else {
                header.style.display = "none";
                document.getElementById(current_full_screen_app).style.borderRadius = "0";
            }
        }
    });
});