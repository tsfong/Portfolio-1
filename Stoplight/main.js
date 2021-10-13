const $goButton = $('#goButton');
const $slowButton = $("#slowButton");
const $stopButton = $('#stopButton');

const $clearLights = () => {
    $('#slowLight').css('backgroundColor', 'black');
    $('#stopLight').css('backgroundColor', 'black');
    $("#goLight").css('backgroundColor', 'black');
}

$("#goButton").on("click", function () {
  $clearLights();
  $("#goLight").css("backgroundColor", "green");
});
$slowButton.click(function () {
  $clearLights();
  $("#slowLight").css('backgroundColor', 'yellow');
});
$stopButton.click(function () {
  $clearLights();
  $("#stopLight").css('backgroundColor', 'red');
});