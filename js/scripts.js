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

  var sizeInput = $("#sizeSelections:checked");
  var myToppings = [];

  $("input:checkbox[name=toppings]:checked").each(function() {
    myToppings.push (parseInt($(this).val()));
  });
  var totalToppingCount = function myToppingsCount (myTopping) {
  myToppings.for(i = 0; sum = 0; i <= myToppings.length; sum += myToppings[i++])
  return sum
};


  console.log(myToppings);
  console.log(totalToppingCount);
  });
  });
