/**
 * Created by fm on 2017/2/8.
 */
function Car(name,color,status){
    this.name=name;
    this.color=color;
    this.status=status;
}
Car.prototype.run=function () {
    this.status="run";
}
Car.prototype.stop=function () {
    this.status="stop";
}
Car.prototype.getStatus=function () {
    return this.status;
}
var myCar=new Car("ford","red","");