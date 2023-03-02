los_config.system_components = {
    logo: () => {
        const logo = document.createElement("img");
        logo.src = los_config.system_images.logo;
        logo.style.width = "100px";
        logo.style.height = "100px";
        return logo;
    },
    progress: value => {
        const progress = document.createElement("div");
        progress.style.width = "150px";
        progress.style.height = "4px";
        progress.style.borderRadius = "2px";
        progress.style.background = "white";

        const speed_of_progress = document.createElement("div");
        speed_of_progress.style.width = `${value || 0}%`;
        speed_of_progress.style.height = "4px";
        speed_of_progress.style.borderRadius = "2px";
        speed_of_progress.style.transition = "all .5s";
        speed_of_progress.style.background = los_config.system_color?.main;

        progress.appendChild(speed_of_progress);
        return {
            element: progress,
            set_value: value => {
                speed_of_progress.style.width = `${value || 0}%`;
            }
        };
    },
    iframe: url => {
        const iframe_id = `los_iframe_${new Date().getTime()}`;
        return `<iframe id="${iframe_id}" src="${url}" style="width: 100%; height: 100%; overflow: scroll; border: none; outline: none; background: white;"></iframe>`;
        // const box = document.createElement("div");
        // const iframe = document.createElement("iframe");
        // iframe.src = url || "";
        // iframe.style.width = "100%";
        // iframe.style.height = "100%";
        // iframe.style.overflow = "scroll";
        // iframe.style.border = "none";
        // iframe.style.outline = "none";
        // iframe.style.background = "white";
        // box.appendChild(iframe);
        // return box.innerHTML;
    }
};