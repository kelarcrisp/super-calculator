import { Total } from './../src/backend-code.js';


describe('total', function() {

  it('should return your age in Earth years', function() {
    var test = new Total("kelar",23,"venus");
    expect(test.name).toEqual("kelar");
    expect(test.age).toEqual(23);
    expect(test.planet).toEqual("venus");
  });

})
