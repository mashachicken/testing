// BACK END LOGIC
function PizzaPie (size, toppings){
  this.size = size,
  this.toppings = toppings,
  this.price = 0
};












// FRONT END LOGIC




$(document).ready(function(){
$("#orderMenu").submit(function(e){
  event.preventDefault();
  // INPUT RECEIVING VARIABLE
  var sizeInput = $("#sizeSelections:checked");
  // UNDEFINED ARRAYS TO CATCH VALUES OF EACH TOPPING SELECTION
  var myToppings = [];
  var totalToppings = [];

// THIS LOOP IS GRABING THE VALUE FOR EACH CHECKED BOX
  $("input:checkbox[name=toppings]:checked").each(function() {
    myToppings.push (parseInt($(this).val()));
    totalToppings.push (totalToppings += myToppings[i])
  });

  for (var i=0; i<myToppings.length; i++){
    totalToppings = myToppings[i] + myToppings[i];
  };

  console.log(typeof myToppings[0]);
  console.log(totalToppings);


  });
  });
