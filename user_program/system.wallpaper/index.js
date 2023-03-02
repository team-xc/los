// noinspection JSUnresolvedVariable,ES6ConvertVarToLetConst

var wallpaper_content = document.getElementById("wallpaper_content");

los_config.system_wallpaper.forEach(wallpaper_src => {
    const wallpaper_item = document.createElement("img");
    wallpaper_item.src = wallpaper_src + "_thumbnail.jpg" || "";
    wallpaper_content.appendChild(wallpaper_item);
    wallpaper_item.onclick = () => {
        wallpaper.children[0].src = wallpaper_src + ".jpg" || "";
    };
});