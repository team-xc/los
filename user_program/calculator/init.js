los_config.temporary_cache = {
    config: {
        "name": "calculator",
        "window": {
            "title": "Calculator",
            "width": "346px",
            "height": "538px"
        },
        "single_window": true,
        "allow_full_screen": false
    },
    ui: `
<link rel="stylesheet" type="text/css" href="https://cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"/>
<link rel="stylesheet" type="text/css" href="user_program/calculator/css/htmleaf-demo.css">
<link href="http://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<link rel="stylesheet" href="user_program/calculator/css/style.css">

<div class="htmleaf-container">
    <div>
        <div class="container">
            <!-- Rounded switch -->
            <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
            <form>
                <input readonly id="display1" type="text" class="form-control-lg text-right">
                <input readonly id="display2" type="text" class="form-control-lg text-right">
            </form>

            <div class="d-flex justify-content-between button-row">
                <button id="left-parenthesis" type="button" class="operator-group">&#40;</button>
                <button id="right-parenthesis" type="button" class="operator-group">&#41;</button>
                <button id="square-root" type="button" class="operator-group">&#8730;</button>
                <button id="square" type="button" class="operator-group">&#120;&#178;</button>
            </div>

            <div class="d-flex justify-content-between button-row">
                <button id="clear" type="button">&#67;</button>
                <button id="backspace" type="button">&#9003;</button>
                <button id="ans" type="button" class="operand-group">&#65;&#110;&#115;</button>
                <button id="divide" type="button" class="operator-group">&#247;</button>
            </div>


            <div class="d-flex justify-content-between button-row">
                <button id="seven" type="button" class="operand-group">&#55;</button>
                <button id="eight" type="button" class="operand-group">&#56;</button>
                <button id="nine" type="button" class="operand-group">&#57;</button>
                <button id="multiply" type="button" class="operator-group">&#215;</button>
            </div>


            <div class="d-flex justify-content-between button-row">
                <button id="four" type="button" class="operand-group">&#52;</button>
                <button id="five" type="button" class="operand-group">&#53;</button>
                <button id="six" type="button" class="operand-group">&#54;</button>
                <button id="subtract" type="button" class="operator-group">&#8722;</button>
            </div>


            <div class="d-flex justify-content-between button-row">
                <button id="one" type="button" class="operand-group">&#49;</button>
                <button id="two" type="button" class="operand-group">&#50;</button>
                <button id="three" type="button" class="operand-group">&#51;</button>
                <button id="add" type="button" class="operator-group">&#43;</button>
            </div>

            <div class="d-flex justify-content-between button-row">
                <button id="percentage" type="button" class="operand-group">&#37;</button>
                <button id="zero" type="button" class="operand-group">&#48;</button>
                <button id="decimal" type="button" class="operand-group">&#46;</button>
                <button id="equal" type="button">&#61;</button>
            </div>

        </div>
    </div>
</div>
`
};