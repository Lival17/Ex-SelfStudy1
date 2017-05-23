var rep = ["Essaye plus tard", "Essaye encore", "Pas d'avis", "C'est ton destin", "Le sort en est jeté", "Une chance sur deux", "Repose ta question", "D'après moi oui", "C'est certain", "Oui absolument", "Tu peux compter dessus", "Sans aucun doute", "Très probable", "Oui", "C'est bien parti", "C'est non", "Peu probable", "Faut pas rêver", "N'y compte pas", "Impossible"];
var i;

for (i = 1; i <= 3; i++){
    var motalea = rep[Math.floor(Math.random() * rep.length)];
    console.log(i);
    prompt("Poser une question ?");
//    console.log(motalea); 
    alert(motalea);
}