$(document).ready(function() {
$("h1").click(function() {
  alert("This is a heading.");
  alert("I told you, THIS IS A HEARDING!");
});

$("p").click(function() {
  alert("This is a paragraph.");
});

$("img").click(function() {
  alert("This is a walrus.");
});
});
$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});