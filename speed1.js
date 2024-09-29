function checkSpeed(speed) { //checks whether a driver's speed is within the legal limit
    if (speed <= 70) {  //This checks if the speed is 70 or below.
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - 70) / 5); 
 //Subtracts 70 from the given speed to calculate how far above the speed limit the driver is.
 //Divides this value by 5 because 1 demerit point is given for every 5 mph over the limit.
 //Uses Math.floor() to round the result down to the nearest whole number.
      if (demeritPoints > 12) { //If the demerit points exceed 12, the driver’s license is suspended
        console.log("License suspended");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
  checkSpeed(150);