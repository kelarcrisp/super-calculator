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


    $("#results").show("#results");
    $("#yourName").text("Hi " + userName);
    // $("#yourAge").text("Your age is " + userAge);
    $("#yourPlanet").text("You're on planet "+ planet);
    // $("#yourExpectancy").text("Your life expectancy is " + expectancy );


    let total = new Total(userName,userAge,planet,expectancy);
    $("#yourAge").text(total.getPlanet());

    let expectancy = new Total (userName,userAge,planet,expectancy);
    $("#yourExpectancy").text(total.getExpectancyDate());

  });
});
