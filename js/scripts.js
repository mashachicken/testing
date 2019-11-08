// BACK END LOGIC
function PizzaPie (size, toppings){
  this.size = size,
  this.toppings = toppings,
  this.price = 0
};

PizzaPie.prototype.getPrice = function (total){
  if (totalToppings >= 1){
    this.price += 3;
  }
  if (totalToppings >= 3 && totalToppings < 6){
    this.price += 6;
  };
  if (totalToppings > 6 && totalToppings<=7){
    this.price += 10;
  };
};

console.log(this.price);







// FRONT END LOGIC



// INPUT RECEIVING VARIABLE
var sizeInput = $("#sizeSelections:checked");
// UNDEFINED ARRAYS TO CATCH VALUES OF EACH TOPPING SELECTION
var myToppings = [];
var totalToppings = 0;

// THIS LOOP IS GRABING THE VALUE FOR EACH CHECKED BOX
function toppingCollector (mytopping) {
$("input:checkbox[name=toppings]:checked").each(function() {
  myToppings.push (parseInt($(this).val()));
});
};

function toppingSum (myToppings) {
for (var i=0; i<myToppings.length; i++){
  totalToppings +=  parseInt(myToppings[i]);
};
};

$(document).ready(function(){
$("#orderMenu").submit(function(e){
  event.preventDefault();
  toppingCollector();
  toppingSum(myToppings)
  console.log(myToppings)
  console.log(totalToppings);
  });
  });
