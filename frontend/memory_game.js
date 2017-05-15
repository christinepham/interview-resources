

randomizeImages();

var face_up = $(this).children("img").hasClass("face-up");

// put pokeball images into card outlines
var card = "<ol>"; 
for (var i = 0; i < pokecard.length; i++) {
  console.log("face up = " + face_up);
  var poke = face_up ? pokecard[i] : POKEBALL;
  card += "<li>";
  // card += "<img src = '" + pokecard[i] + "'/>"; 
  card += "<img src = '" + poke + "'/>"; 
  card += "</li>";
}
card += "</ol>";
document.getElementById("board").innerHTML = card;
//$("#board").flip();

var guess_one = "";
var guess_two = "";
var count = 0;

//check if pokecard is face up
$("li").click(function() {
  count++;
  if ((count == 2) && (face_up) {
    //$(this).children("img").show();
    $(this).children("img").addClass("face-up");
    
    //first guess
    // if (count === 1 ) { 
    //   guess_one =   $(this).children("img").attr("src"); 
    // }   
    
    //second guess
    // else if(count === 2) { 
    //   guess_two = $(this).children("img").attr("src"); 
      
      // since it's the 2nd guess check for match
      // if (guess_one === guess_two) { 
      //   $("img[src='" + guess_two + "']").parent().remove();
      // } 
      
      // if they don't match up
      // else { 
      //   setTimeout(function() {
      //     $("img").not(".match").hide();
      //     $("img").not(".match").removeClass("face-up");
      //   }, 1000);
      // }
      
      // reset the counter
      // count = 0; 
      // setTimeout(function() { console.clear(); }, 60000);      
    //}
  }
});

// randomize the array of images
function randomizeImages(){
  Array.prototype.randomize = function() {
    var i = this.length, j, temp;
    while( --i ) {
      j = Math.floor( 
        Math.random() * (i - 1) 
      );
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
  };
  
  pokecard.randomize();
}

