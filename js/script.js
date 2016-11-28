$(document).ready(function() {


    var favIceCreams = ["chocolate", "strawberry", "vanilla", "mint chocolate", "caramel pralime", "birthday cake", "black Raspberry crunch"]


    favIceCreams.forEach(function(ice) {
        $("ul").append("<li>" + ice + "</li>")
            // $(".array").text(favIceCream);

    });
});
