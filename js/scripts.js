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
  var totalToppings = [];
  $("input:checkbox[name=toppings]:checked").each(function() {
    myToppings.push (parseInt($(this).val()));
  for (var i=0; i<myToppings.length; i++){
    totalToppings += myToppings[i];
  };
  });
  console.log(myToppings);
  console.log(totalToppings);


  });
  });
