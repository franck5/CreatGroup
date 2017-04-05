$(document).ready(function(){

    var Prenom = ["Florian","Maxime","Jordy","Mouad","Raphael","Marco","Grégory","Morel","Océane","Emilie","Dimitri","Julien","Elodie","Franck","Romain"];

    var tables = ["table 1","table 2","table 3","table 4","table 5"];

    var numeroTable= 1;


    function save() {
	localStorage.setItem('Prenom', JSON.stringify(Prenom));
	localStorage.setItem('tables', JSON.stringify(tables));
};



   function shuffle(Prenom) {
		var j, x, i;
		for (i = Prenom.length; i; i--) {
			j = Math.floor(Math.random() * i);
			x = Prenom[i - 1];
			Prenom[i - 1] = Prenom[j];
			Prenom[j] = x;
		}
	}
    

    $("#button").click(function(){

		
		shuffle(Prenom);
		


		for (var i = 0 ; i < Prenom.length  ; i++) {
			var nomApprenants = Prenom[i];
			console.log(Prenom[i] + " Table " + numeroTable);

			if ( numeroTable >= 5 ){
				numeroTable = 1;
			}
			else{ 
				numeroTable++;
			}
       $("#inserer").append('<tr><td>' + nomApprenants + '</td><td>' + numeroTable +  '</td></tr>');
		}
    	save();
	});

	$("#Suprimer").click(function(){
		$("#inserer").html("");
	});


});
