$("table").onload = update();
$("in").addEventListener("input", update);
$("unit").addEventListener("input", update);

$("formula").onload = formulas();
$("from").addEventListener("input", formulas);
$("to").addEventListener("input", formulas);