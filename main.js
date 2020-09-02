// rinomino il logo in hamburger
var hamburger = $("i.fas.fa-bars");


hamburger.click( //seleziono l'icona dell'hamburger e gli indico cosa voglio fare con un click
  // grazie alla funzione posso esguire tutto ciò che e dentro
  function () {
    // scrivo cosa voglio fare quando clicco sull'icona hamburgher in questo caso aggiungo la classe active
    $(".hamburger-menu").addClass("active");
  }
);

// rinomino il logo X in chiusura
var chiusura = $("i.fas.fa-times");

chiusura.click( //seleziono l'icona della x e gli indico cosa voglio fare con un click
  // grazie alla funzione posso esguire tutto ciò che ce dentro
  function () {
    // scrivo cosa voglio fare quando clicco sull'icona della x
    $(".hamburger-menu").removeClass("active");
  }
);
