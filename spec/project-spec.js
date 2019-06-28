import { Total } from './../src/backend-code.js';


describe('total', function() {

  it('should return your age in Earth years', function() {
    var test = new Total("kelar",23,"venus");
    expect(test.name).toEqual("kelar");
    expect(test.age).toEqual(23);
    expect(test.planet).toEqual("venus");
  });
  it('should return your age in Mercury years', function() {
    var test = new Total("kelar",23,"venus");
    expect(test.name).toEqual("kelar");
    expect(test.age).toEqual(23);
    expect(test.planet).toEqual("venus");
  });

  it('should return your age in Venus years', function() {
    var test = new Total("kelar",23,"venus");
    expect(test.name).toEqual("kelar");
    expect(test.age).toEqual(23);
    expect(test.planet).toEqual("venus");
  });
  it('should return your age in Mars years', function() {
    var test = new Total("kelar",23,"venus");
    expect(test.name).toEqual("kelar");
    expect(test.age).toEqual(23);
    expect(test.planet).toEqual("venus");
  });
  it('should return your age in Jupiter years', function() {
    var test = new Total("kelar",23,"venus");
    expect(test.name).toEqual("kelar");
    expect(test.age).toEqual(23);
    expect(test.planet).toEqual("venus");
  });


})
