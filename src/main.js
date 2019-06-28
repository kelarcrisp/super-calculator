import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Total } from './backend-code';

$(document).ready(function() {
  $("form#Calculator").submit(function() {
    event.preventDefault();
    var userName = ($("input#userName").val());
    var userAge = ($("#userAge").val());
    var planet= $("#planet").val();
    var Earth = ($("input#userAge").val());
    var Mercury = ($("input#userAge *.24").val());

    $("#results").show("#results");
       $("#text1").text(userName);
    $("#text2").text(userAge);
       $("#text3").text(planet);

       // create object Total pass in
       // Total.getAge()
       let total = new Total(userName,userAge,planet);
      $("#text2").text(total.getPlanet());
     });
   });


//get input: 23, mars
//send that info to backend
//send back results
//display result
