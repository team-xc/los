los_config.system_drive?.graphical_interface?.set_graphical("system_program/error_page", args => {
    los_config.underlying.basic.load?.style("#system_program_error_page_ui { cursor: none; }");
    document.getElementById("error_page_content").innerText = JSON.stringify(args);
});