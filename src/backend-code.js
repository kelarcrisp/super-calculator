//the class for all backend

export class Total{
  constructor(name, age, planet,){
    this.name = name;
    this.age = age;
    this.planet = planet;

  }

  getPlanet(){
    
    if(this.planet == "Earth"){
      return this.age;
    }else if(this.planet == "Mercury"){
      return this.age *.24;
    }else if(this.planet == "Venus"){
      return this.age *.62
    }else if(this.planet == "Mars"){
      return this.age *1.88;
    }else if(this.planet == "Jupiter"){
      return this.age *11.86;
    }



    // mercuryExpectancy() {
    //   const mercuryYear = 0.24;
    //   return parseFloat((this.age / mercuryYear).toFixed(2));

          }


        }
