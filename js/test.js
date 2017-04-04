var promoName=['Greg','Morel','Oceane','Marco', 'Mouad', 'Raphael', 'Romain','Franck','Elodie','Julien','Dimitri','emilie', 'Jordi','Maxime','Flo'];
var nombreDeTable = null;
//tableau de meme longeur que la promo les valeur vont de 0 a table.length;
var tables = null;
var results = null;

//remplie un tableau de la bonne tailles avec des chiffre allant de 0 a nbrDeTable

function setNbrTable(n){
  console.log('nouveau nombre de tables:',n);
  nombreDeTable = n;
}

function generateTable(){
  tables = [];
  tables.length = promoName.length;
  for(var i = 0; i<tables.length; i++){
    tables[i]=i%nombreDeTable;
  }
  console.log('tables[]' , tables);
  
}

//ajoute une nouvelle persone la promo regenere le tableau Table
function addPerson(newP){
  promoName.push('newP');
  generateTable();
}

//defini les absent et fait une nouveau tableau promo, adapte la longeures de tables[]

//ind = index a retirer du tableau Promo
function retireTduTableau(ind){
  promoName.splice(ind, 1);
  //console.log('retir du tableau',ind,promoName);
}

function repartir(){
  var randInt  = Math.floor( Math.random()*promoName.length );
  //console.log("randInt :", randInt);
  insertInResult_DelFromPromo(randInt);
  if(promoName.length>0){
    repartir();
  }
}

function insertResultInPage(){

  for(var i = 0; i < results.length; i++){
    var rr = $('<tr><td>'+results[i]+'</td><td>'+tables[i]+'</td></tr>');
    $('#res').append(rr);
  }
}




function insertInResult_DelFromPromo(ind){
  if(results ===null){
    results = [];
  }
  results.push(promoName[ind]);
  retireTduTableau(ind);
}

function resToString(){
  for(i = 0; i<results.length;  i++){
    console.log('table : ',tables[i], 'Nom : ', results[i]);

  }
}

function createObject(){
  var result = [];
  for(var i = 0; i<=results.length; i++){
    var obj = {"prenom":results[i],"table":tables[i]};
    results.push(obj);
  }
  return results;
}



  setNbrTable(5);
  generateTable();
  repartir();
  resToString();

  insertResultInPage();