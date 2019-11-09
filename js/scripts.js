// BACK END LOGIC
function PizzaPie (size, toppings){
  this.size = size,
  this.toppings = toppings,
  this.price = 0
};

// WORKING!✅
// THIS PROTOTYPE WILL SET THE PIZZA PRICE IN REGARDS TO THE TOTAL TOPPINGS
PizzaPie.prototype.calculatePrice = function() {
    if (this.size === "Small") {
      this.price += 5
    }
    if (this.size === "Medium") {
      this.price += 10
    }
    if (this.size === "Large") {
      this.price += 15
    }

    var numberOfToppings = this.toppings.length;
    this.price += numberOfToppings
};


PizzaPie.prototype.setSize= function(sizeOpt){
  if (sizeOpt === "1"){
    this.size = "Small"
  };
  if (sizeOpt === "2"){
    this.size = "Medium"
  };
  if (sizeOpt === "3"){
    this.size = "Large"
  };
};
PizzaPie.prototype.setToppings= function(toppings) {
this.toppings = toppings;
}
// FRONT END LOGIC

// INPUT RECEIVING VARIABLE
var sizeInput = $("#sizeSelections:checked");
// UNDEFINED ARRAYS TO CATCH VALUES OF EACH TOPPING SELECTION
var totalToppings = 0;

// WORKING!✅
// THIS LOOP IS GRABING THE VALUE FOR EACH CHECKED BOX
function toppingCollector() {
  var myToppings = [];
  $("input:checkbox[name=toppings]:checked").each(function() {
    myToppings.push($(this).val());
  });
  console.log(myToppings);
  return myToppings;
};


// WORKING!✅
// THIS FUNCTION GETS THE TOTAL NUMBER OF TOPPINGS
function toppingSum (myToppings) {
  for (var i=0; i<myToppings.length; i++){
    totalToppings +=  parseInt(myToppings[i]);
  };
};

function showPizzaDetails (pizzaPie){
  console.log("hello")
  priceTotal = this.price;
  $(".results").show();
  $(".pizza-price").html(priceTotal);
};

// THIS WILL CALL FUNTIONS ONCE FORM IS SUBMITTED!
$(document).ready(function(){
  $("#orderMenu").submit(function(e){
    event.preventDefault();
    var newPizza = new PizzaPie();

    var sizeOpt = $("#sizeSelections").val();
    newPizza.setSize(sizeOpt);

    var toppings = toppingCollector();
    newPizza.setToppings(toppings);
    newPizza.calculatePrice();
    // toppingSum(myToppings)
    // newPizza.getPrice();
    // showPizzaDetails(newPizza);
    //
    //
    // console.log(sizeOpt);
    console.log(newPizza);
  });
});
