
var convert = document.getElementById("convert");


convert.addEventListener(
    "click",

    function () {



        var naira = document.getElementById("input").value;

        var dollar = document.getElementById("dollarout").innerHTML = "&#36;" + (+naira / 415.87).toFixed(2);

        var pound = document.getElementById("poundout").innerHTML = "&#163;" + (+naira / 565.34).toFixed(2);

        var euro = document.getElementById("euroout").innerHTML = "&#128;" + (+naira / 470.85).toFixed(2);

        var franc = document.getElementById("francout").innerHTML = "&#8355;" + (+naira / 451.).toFixed(2);










    }
)


var burger = document.getElementById("bars");
var times = document.getElementById("times");


burger.addEventListener(


    "click",

    function () {

        var burger = document.getElementById("bars");
        var times = document.getElementById("times");
        var menu = document.getElementById("menu");

        if (burger.style.display === "flex") {

            burger.style.display = "none";
            times.style.display = "flex";
            menu.style.display = "flex";

        }

        else {

            burger.style.display = "flex";
            times.style.display = "none";
            menu.style.display = "none";

        }





    }





)

times.addEventListener(


    "click",

    function () {

        var burger = document.getElementById("bars");
        var times = document.getElementById("times");
        var menu = document.getElementById("menu");


        burger.style.display = "none";
        times.style.display = "flex";
        menu.style.display = "flex";

        while (times.style.display === "flex") {

            burger.style.display = "flex";
            times.style.display = "none";
            menu.style.display = "none";

        }
        //Nifemi: you can also use if statemets . I did that initially but decided to use while instead




    }





)










