function Car (doors,colour){
  this.doors=doors;
  this.colour= function(){
    return colour.charAt(0).toUpperCase() + colour.slice(1);
  };
  this.manufacturer_type=["Ford","Fiat","Saab"];
  this.available_colours=["Black","Red","Green"]
};

Car.prototype.write = function(x){
  console.log("Your car is a"+" "+this.manufacturer_type[x]);
  console.log(x);
};

Car.prototype.look_up = function() {
  //checking to see if the .doors is correct
  if (isNaN(this.doors)&&this.doors<4){
    console.log("That is not an available type");
    return this
  };
  //checking to see if the .colour is correct
  if (this.available_colours.indexOf(this.colour) >= 0){
    console.log("That is not an available type");
    return this;
  };
  //Compare and log
  if (this.doors==4 && this.colour() == "Black") {
    this.write(0)
  } else if (this.doors==4 && this.colour() == "Red") {
    this.write(1)
  } else if (this.doors==4 && this.colour() == "Green") {
    this.write(2)
  };
};

var my_Car= new Car(4,"red");
my_Car.look_up();
