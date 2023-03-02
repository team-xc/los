los_config.temporary_cache = {
    ui: `
<style>
    #system_program_error_page_ui {
        width: 100%;
        height: 100%;
        background: ${los_config.system_color?.main};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    }
    
    #error_page_content {
        font-size: 50px;
        text-align: center;
    }
    
    .error_page_tips {
        font-size: 50px;
    }
</style>

<div id="system_program_error_page_ui">
    <span class="error_page_tips" style="font-size: 100px; font-weight: bold;">:-(</span>
    <span class="error_page_tips">LOS 遇到问题，需要重新启动。</span>
    <span id="error_page_content"></span>
</div>
`
};