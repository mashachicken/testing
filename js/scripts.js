// BACK END LOGIC
function PizzaPie (size, toppings){
  this.size = size,
  this.toppings = toppings,
  this.price = 0
};

PizzaPie.prototype.getPrice = function (){
  if (totalToppings >= 1 && totalToppings <3){
    this.price += 5;
    console.log(totalToppings);
  }
  if (totalToppings >= 3 && totalToppings < 6){
    this.price += 10;
  };
  if (totalToppings > 6 && totalToppings<=7){
    this.price += 12;
  };
  return this.price;

  };







// FRONT END LOGIC



// INPUT RECEIVING VARIABLE
var sizeInput = $("#sizeSelections:checked");
// UNDEFINED ARRAYS TO CATCH VALUES OF EACH TOPPING SELECTION
var myToppings = [];
var totalToppings = 0;
var toppingsList = [];
console.log(toppingsList);

// THIS LOOP IS GRABING THE VALUE FOR EACH CHECKED BOX
function toppingCollector (mytopping) {
$("input:checkbox[name=toppings]:checked").each(function() {
  myToppings.push (parseInt($(this).val()));
  toppingsList.push($(this).html());
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
  var newPizza = new PizzaPie ();
  toppingCollector();
  toppingSum(myToppings)
  var price = newPizza.getPrice();
  console.log(price);
  console.log(newPizza);
  });
  });
