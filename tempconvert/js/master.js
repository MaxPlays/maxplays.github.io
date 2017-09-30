function update() {
    var input = parseInt($("in").value);
    var kelvin = 0;

    switch($("unit").value){
        case "c":
            kelvin = input + 273.15;
            break;
        case "k":
            kelvin = input;
            break;
        case "f":
            kelvin = (input - 32) * 5/9 + 273.15;
            break;
    }

    $("out-c").innerHTML = (Math.round((kelvin - 273.15) * 100) / 100) + "°";
    $("out-k").innerHTML = (Math.round(kelvin * 100) / 100) + "°";
    $("out-f").innerHTML = (Math.round(((kelvin - 273.15) * 9/5 + 32) * 100) / 100) + "°";

}

function $(name) {
    return document.getElementById(name);
}