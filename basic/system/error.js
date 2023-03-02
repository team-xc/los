window.onerror = (message, source, lineno, colno, error) => {
    los_config.is_show_error && los_config.initialization?.error_page(null, message);
};

// window.addEventListener("error", error => {
//     los_config.is_show_error && los_config.initialization?.error_page(null, error);
// }, true);