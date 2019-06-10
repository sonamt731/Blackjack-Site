var handscounter = 0;
var identicalpairs = 0;
var blackjack = 0;

function pickIt(){
	//alert("ready for javascript");
	var c1 = Math.floor(Math.random()*13) + 2;//number between 2 and 14 inclusive
	var c2 = Math.floor(Math.random()*13) + 2;
    
	with (document.forms[0]){
	//document.forms[0].card1.value=c1;
	//because we have the with we only need to do 
    switch (c1){
        case 12: card1.value=c1-2;  break; //Jack - counts as 10 points
        case 13: card1.value=c1-3;  break; //Queen - counts as 10 points
        case 14: card1.value=c1-4;  break;//King - counts as 10 points 
        default: card1.value=c1;
    }
        
	switch (c2){
        case 12: card2.value=c2-2; break;  //Jack - counts as 10 points
        case 13: card2.value=c2-3; break; //Queen - counts as 10 points
        case 14: card2.value=c2-4; break;//King - counts as 10 points 
        default: 
            if((c1 == 11) && (c2 == 11)){
                card2.value = 1; break;
            }
            else{
                card2.value = c2;
            }
            
    }
        
    document.images[7].src = "cards/"+c1+ "hearts.gif";
	document.images[8].src = "cards/"+c2+"hearts.gif";
        
    c1 = parseInt(card1.value); //convert to an int 
    c2 = parseInt(card2.value); //convert to an int
    var tot = c1 + c2;
	total.value = tot;
    handscounter = parseInt(handscounter) + 1;
    hands.value = handscounter;
    identicalpairs = parseInt(identicalpairs) + 1; //conter for identical pairs
        
	
        
    if (tot == 21){
        openWindow();
        blackjack++;
    }
    setCookie("blackjack", blackjack,30);
    }
}//end pick it

function openWindow(){
    theNewWindow = window.open("congrats.html", "winner", "width=400, height=400 left=300 top=200");
}
    
function closeWindow(){
    if (theNewWindow && !theNewWindow.close()){ //make sure it exists
				theNewWindow.close();
			}
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  var blackjackval = getCookie("blackjack");

  if (user != "") {
    alert("Welcome Back " + user);
  } else {
     user = prompt("Please Enter Your Name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
  
  if (blackjackval == 0){
      alert("You have gotten 0 blackjacks!");
  }
  else{
    alert("You have gotten " + blackjackval + " blackjacks!")
  }
}



