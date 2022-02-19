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

var wconvert = document.getElementById("wconvert");


wconvert.addEventListener(
    "click",

    function () {



        var grams = document.getElementById("ginput").value;

        var kilo = document.getElementById("kilo").innerHTML = (+grams* 1000).toFixed(3);

        var pounds = document.getElementById("pound").innerHTML = (+grams*453.59).toFixed(3);;

        var tonne = document.getElementById("tonne").innerHTML = (+grams*1000000).toFixed(3);;

        var ounce = document.getElementById("ounce").innerHTML = (+grams*28.35).toFixed(3);










    }
)





