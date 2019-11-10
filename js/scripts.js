// BACK END LOGIC
function PizzaPie(){
  this.size = ""
  this.toppings = []
  this.price = 0
};

// WORKING!✅
// THIS PROTOTYPE WILL SET THE PIZZA PRICE IN REGARDS TO SIZE SELECTION AND WILL ALSO  ADD 1 FOR EACH STRING IN THE TOPPINGS ARRAT (TOTAL PRICE THAT WILL BE DISPLAYED ON DOM)
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

// THIS PROTOTYPE WILL SET THE SIZE SELECTION OF THE PIZZA IN REGARDS TO THE SELECTION VALUE (WHAT SIZE WILL BE DISPLAYED ON DOM)
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
  // THIS ARRAY WILL HOLD THE SELECTED STRINGS(QTY OF STRINGS WILL BE USED TO SET PRICE/ EACH INDIVIDUAL VALUE SELECTION WILL BE SET AS TOPPINGS KEY VALUE)
  var myToppings = [];
  $("input:checkbox[name=toppings]:checked").each(function() {
    myToppings.push($(this).val());
  });
  return myToppings;
};

// THIS FUNCTION WILL SHOW PIZZAPIE VALUES ON DOM
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
    if (newPizza.size ===""){
    alert("Please select a size!")
    return
    };
    var toppings = toppingCollector();
    newPizza.setToppings(toppings);
    newPizza.calculatePrice();

    showPizzaDetails(newPizza);

    console.log(newPizza);
  });
});
