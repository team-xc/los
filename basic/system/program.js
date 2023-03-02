los_config.underlying.system_program = {
    run: (program_name, callback, args = []) => {
        los_config.temporary_cache = args;
        los_config.underlying.basic.load?.script_file(`system_program/${program_name}/index`, callback);
    }
};