$( document ).ready(function() {

  $('#result').append( "<tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr>" );
  

  var Prenom=['Greg','Morel','Oceane','Marco', 'Mouad', 'Raphael', 'Romain','Franck','Elodie','Julien','Dimitri','emilie', 'Jordi','Maxime','Flo'];

  var Number=[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  for(var i=Prenom.length-1; i>=1; i--){
  
    var hasard=Math.floor(Math.random()*(i+1));
  
    var sauve=Prenom[i];
    Prenom[i]=Prenom[hasard];
    Prenom[hasard]=sauve;

  

}
    
    var prenomnumber= [Prenom[0] + " " + Number[0]]
  
    console.log(prenomnumber);
  
    console.log(Prenom.toString());

    console.log(Number.toString());
})