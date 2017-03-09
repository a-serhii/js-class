var Human = function (name, age, sex, height, weight) {
    this.name = name;
    this.age = age;
    this.sex = 'male';
    this.height = height;
    this.weight = weight;
};

var Student = function (place_of_study, scholarship, watch_tv) {
    this.place_of_study = place_of_study;
    this.scholarship = scholarship;
    this.watch_tv = function () {
        console.log(this.name + ' watch TV');
    }
};

var Worker = function (place_of_work, salary, work) {
    this.place_of_work = place_of_work;
    this.salary = salary;
    this.work = function () {
        console.log(this.name + ' work');
    };
};

Student.prototype = new Human;
Worker.prototype = new Human;


var Vasilij = new Student('KPI', 850);
Vasilij.name = 'Vasya Pupkin';
Vasilij.age = 19;
Vasilij.sex = 'male';
Vasilij.height = 180;
Vasilij.weight = 90;
console.log(Vasilij);
Vasilij.watch_tv();


var Jessica = new Worker('actress', 10000);
Jessica.name = 'Jessica Marie Alba';
Jessica.age = 35;
Jessica.sex = 'female';
Jessica.height = 170;
Jessica.weight = 60;
console.log(Jessica);
Jessica.work();

var Ivan = new Worker('programmer', 3000);
Ivan.name = 'Ivan Grishaev';
Ivan.age = 30;
Ivan.height = 180;
Ivan.weight = 80;
console.log(Ivan);
Ivan.work();
console.log('Ivan is sex = ' + Ivan.sex);













