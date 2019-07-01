import { Total } from './../src/backend-code.js';

let name = "kelar";
let age = 23;
let planet = "Earth";
let expectancy = "";


describe('total', function() {
  it('should return your age in Earth years', function() {
    let test = new Total(name, age, planet, expectancy);
    expect(test.name).toEqual("kelar");
    expect(test.age).toEqual(23);
    expect(test.planet).toEqual("Earth");
  });




//
it("should test if mercury is calculated correctly", function(){
  let planet = "Mercury"
  let test = new Total(name, age, planet, expectancy);
  test = test.getPlanet(planet)

  expect(test).toEqual(" your age is 5.52")

});

it("should test if Venus is calculated correctly", function(){
  let planet = "Venus"
  let test = new Total(name, age, planet, expectancy);
  test = test.getPlanet(planet)

  expect(test).toEqual(" your age is 14.26");
});

it("should test if Mars is calculated correctly", function(){
  let planet = "Mars"
  let test = new Total(name, age, planet, expectancy);
  test = test.getPlanet(planet)

  expect(test).toEqual(" your age is 43");

});

it("should test if Jupiter is calculated correctly", function(){
  let planet = "Jupiter"
  let test = new Total(name, age, planet, expectancy);
  test = test.getPlanet(planet)

  expect(test).toEqual(" your age is 272.78");

});

  it("should test to see your life expectancy on Mercury", function(){
    let planet = "Mercury"
    let expec = new Total(name, age, planet, expectancy);
    expec = expec.getExpectancyDate()

    expect(expec).toEqual(26);
});

it("should test to see your life expectancy on Venus", function(){
  let planet = "Venus"
  let expec = new Total(name, age, planet);
  console.log(expec)
  expec = expec.getExpectancyDate()

  expect(expec).toEqual(17);
});

it("should test to see your life expectancy on Mars", function(){
  let planet = "Mars"
  let expec = new Total(name, age, planet, expectancy);
  expec = expec.getExpectancyDate()

  expect(expec).toEqual(13);
});
//
it("should test to see your life expectancy on Jupiter", function(){
  let planet = "Jupiter"
  let expec = new Total(name, age, planet, expectancy);
  expec = expec.getExpectancyDate()

  expect(expec).toEqual(10);

});
});
