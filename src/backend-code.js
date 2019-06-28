//the class for all backend

export class Total{
  constructor(name, age, planet,expectancy){
    this.name = name;
    this.age = age;
    this.planet = planet;

  }


  getPlanet(planet){

    if(this.planet == "Earth"){
      return this.age;
    }else if(this.planet == "Mercury"){
      return "your life expectancy is " +this.age *.24 + " years on Mercury.";
    }else if(this.planet == "Venus"){
      return "your life expectancy is " +this.age *.62 + " years on Venus.";
    }else if(this.planet == "Mars"){
      return "your life expectancy is " +this.age *1.88 + " years on Mars.";
    }else if(this.planet == "Jupiter"){
      return "your life expectancy is " +this.age *11.86 + " years on Jupiter.";
    }
  }

    getExpectancyDate(){
      // debugger;
      const averageLifeSpan = 75;
      if(planet == "Earth"){
        let yearsLeft = averageLifeSspan - this.age;
        if(yearLeft == 0){
          return "YOU ARE DEAD";
        }

        }else if (planet == "Mercury"){
          let yearsLeft = averageLifeSpan - this.age/2;
          if(yearsLeft == 0) {
            return "YOU ARE DEAD";
          }

          }else if (planet == "Venus"){
            let yearsLeft = averageLifeSpan - this.age/3;
            if(yearsLeft == 0) {
              return "YOU ARE DEAD";
            }

            }else if (planet == "Mars"){
              let yearsLeft = averageLifeSpan - this.age/4;
              if(yearsLeft == 0) {
                return "YOU ARE DEAD";
              }

              }else if (planet == "Jupiter"){
                let yearsLeft = averageLifeSpan - this.age/5;
                if(yearsLeft == 0) {
                  return "YOU ARE DEAD";


                }

              }
            }
          }
