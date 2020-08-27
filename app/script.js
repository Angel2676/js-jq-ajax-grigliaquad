// Assegnazione
// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta
// AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
// Buon lavoro :wink:
// ***********************************

// Svolgimento

// 1 Step -
$(document).ready(function(){
    // Click sul quadrrato
    $(".square").click(function(){
        var box = $(this);

    $.ajax(
    {
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data) {
    if (data.response <= 5) {
    box.addClass("yellow");
    box.text(data.response);
    } else {
    box.addClass("green");
    box.text(data.response);
    }

    console.log(data);


    },
    error: function (richiesta, stato, errori) {
    alert("E' avvenuto un errore. " + errore);
    }
    }
    );

    })





// Fine document
})
