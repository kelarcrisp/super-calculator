import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Total } from './backend-code';

$(document).ready(function() {
  $("form#Calculator").submit(function() {
    event.preventDefault();
    let userName = ($("input#userName").val());
    let userAge = ($("#userAge").val());
    let planet= $("#planet").val();
    // var Earth = ($("input#userAge").val());
    // var Mercury = ($("input#userAge *.24").val());

    $("#results").show("#results");
       $("#yourName").text(userName);
    $("#yourAge").text(userAge);
       $("#yourPlanet").text(planet);
        $("#yourExpectancy").text(planet);

       // create object Total pass in
       // Total.getAge()
       let total = new Total(userName,userAge,planet,expectancy);
      $("#results").append(total.getPlanet());
      let expectancy = new Total (userName,userAge,planet,expectancy);
        $("#results").append(total.getExpectancyDate());

     });
   });


//get input: 23, mars
//send that info to backend
//send back results
//display result
