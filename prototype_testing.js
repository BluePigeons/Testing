function Car (doors,colour){
  this.doors=doors;
  this.colour= function(){
    return colour.charAt(0).toUpperCase() + colour.slice(1);
  };
  this.manufacturer_type=["Ford","Fiat","Saab"];
  this.available_colours=["Black","Red","Green"];
};

Car.prototype.write = function(x){
  console.log("Your car is a"+" "+this.manufacturer_type[x]);
  console.log(x);
};

Car.prototype.error_check= function(){
  //checking to see if the .doors is correct
  if (isNaN(this.doors)&&this.doors<4){
    return false;
  }
  //checking to see if the .colour is correct
  else if (this.available_colours.indexOf(this.colour()) >= 0){
    return false;
  } else {
    return true;
  };
};

Car.prototype.look_up = function() {
  //check if this.check returns true or false
  if(!this.error_check()){
    throw new error("That is not an available type");
  }
  //Compare and log
  else{
    if (this.doors==4 && this.colour() == "Black") {
      this.write(0)
    } else if (this.doors==4 && this.colour() == "Red") {
      this.write(1)
    } else if (this.doors==4 && this.colour() == "Green") {
      this.write(2)
    };
  };
};

var my_Car= new Car(4,"Blue");
my_Car.look_up();
