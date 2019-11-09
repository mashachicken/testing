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


// WORKING!✅
// THIS LOOP IS GRABING THE VALUE FOR EACH CHECKED BOX
function toppingCollector() {
  var myToppings = [];
  $("input:checkbox[name=toppings]:checked").each(function() {
    myToppings.push($(this).val());
  });
  return myToppings;
};


function showPizzaDetails (pizzaPie){
  $(".pizza-size").html(pizzaPie.size)
  $(".pizza-toppings").html(pizzaPie.toppings.join(", "));
  $(".pizza-price").html(pizzaPie.price);
  $(".results").show();
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

    showPizzaDetails(newPizza);

    console.log(newPizza);
  });
});
