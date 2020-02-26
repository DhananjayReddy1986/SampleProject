class Car{
    constructor(brand){
        this.carName = brand;
        console.log(this.carName);
    }
    display(){
        return "I have a" + this.carName;
    }
}
myCar = new Car("Figo")
disp = myCar.display();
 console.log(disp)