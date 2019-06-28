import { Total } from './../src/backend-code.js';


describe('total', function() {
  it('should return your age in Earth years', function() {
    let test = new Total("kelar",23,"venus");
    expect(test.name).toEqual("kelar");
    expect(test.age).toEqual(23);
    expect(test.planet).toEqual("venus");
  });


it("should test if mercury is calculated correctly", function(){
  let test = new Total(55);
  test.toEqual(13.2));




});


});
