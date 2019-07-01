//the class for all backend

export class Total{
  constructor(name, age, planet){
    this.name = name;
    this.age = age;
    this.planet = planet;

  }


  getPlanet(planet){

    if(this.planet == "Earth"){
      return this.age;
    }else if(this.planet == "Mercury"){
      return " your age is " + this.age *.24;
    }else if(this.planet == "Venus"){
      return " your age is " +this.age *.62 ;
    }else if(this.planet == "Mars"){
      return " your age is "+parseInt(this.age *1.88)  ;
    }else if(this.planet == "Jupiter"){
      return " your age is " +this.age *11.86 ;
    }
  }

  getExpectancyDate(){
    // debugger;
    const averageLifeSpan = 75;

    if(this.planet === "Earth"){
      let yearsLeft =  averageLifeSpan - this.age;
      return yearsLeft;

    }else if (this.planet === "Mercury"){
      let yearsLeft = (averageLifeSpan - this.age)/2;
      return parseInt(yearsLeft);

    }else if (this.planet === "Venus"){
      let yearsLeft =  (averageLifeSpan - this.age)/3;
      return parseInt(yearsLeft);

    }else if (this.planet === "Mars"){
      let yearsLeft =  (averageLifeSpan - this.age)/4;
      return parseInt(yearsLeft);

    }else if (this.planet === "Jupiter"){
      let yearsLeft =  (averageLifeSpan - this.age)/5;

      return parseInt(yearsLeft);
    }
    return parseInt(yearsLeft);


  }

}
