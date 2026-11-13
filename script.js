// Afficher ce message dans la console pour confirmer que le script est chargé.
console.log("Le script est chargé")

// Récupérer le bouton qui affiche ou masque les horaires.
const boutonHoraires = document.querySelector("#bouton-horaires");

// Récupérer le tableau des horaires.
const tableHoraires = document.querySelector("#table-horaires");

// Écouter les clics sur le bouton des horaires.
boutonHoraires.addEventListener("click", function () {
  
// Ajouter ou retirer la classe "cache" pour afficher ou masquer le tableau.
tableHoraires.classList.toggle("cache");
});

// Créer une variable qui compte les produits ajoutés au panier.
let nombre = 0;

// Récupérer l’élément qui affiche le nombre de produits dans le panier.
const compteur = document.querySelector("#compteur");

// Récupérer tous les boutons « Commander » de la page.
const boutons = document.querySelectorAll(".produit-bouton");

// Parcourir la liste des boutons « Commander ».
for (const bouton of boutons) {

// Écouter le clic sur le bouton en cours.
  bouton.addEventListener("click", function () {

    // Augmenter le nombre de produits d’une unité.
    nombre = nombre + 1;

    // Mettre à jour le nombre affiché dans le panier.
    compteur.textContent = nombre;
    
    // Afficher un message dans la console après chaque clic.
    console.log("Ajouté au panier")
  });
}
