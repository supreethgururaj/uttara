
$(document).ready(function() {
    $("#navheader").load("header.html");
    $("#uttara-footer").load("footer.html");
    $("a").on("click", function(e){
      alert($(this).href)
    })
});