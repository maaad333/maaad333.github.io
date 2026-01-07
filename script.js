'use strict';

console.log("hello")

$("img").on({
    "click": function () {
        console.log(selection);
        if (selection == 0) {
            $(this).hide();
            id = $(this).data("id");
            $(id).show();
            selection = 1;
            console.log(selection);
            card1 = $(id).scr;
        }
    });


