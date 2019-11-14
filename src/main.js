
import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { PizzaPie } from './../src/pizza.js';
import { toppingCollector } from './../src/pizza.js';
import { showPizzaDetails } from './../src/pizza.js';
// import { calculatePrice, setSize, setToppings } from './../src/pizza.js';
  // THIS WILL CALL FUNTIONS ONCE FORM IS SUBMITTED!
  $(document).ready(function(){
    $("#orderMenu").submit(function(e){
      e.preventDefault();

      var newPizza = new PizzaPie();

      var sizeOpt = $("#sizeSelections").val();

      newPizza.setSize(sizeOpt);
      if (newPizza.size ===""){
        alert("Please select a size!")
        return
      }
      var toppings = toppingCollector();
      newPizza.setToppings(toppings);
      newPizza.calculatePrice();

      showPizzaDetails(newPizza);

      console.log(newPizza);
    });
  });
