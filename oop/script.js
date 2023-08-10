//OOP work with javascript beginning.  NOTE: This is a ES5 module

// create object skeleton  Way1

/*function adress(fullName,birthYear,country,state,city,street,house_no){
    this.fullName=fullName;
    this.birthYear=birthYear;
    this.country=country;
    this.state=state;
    this.city=city;
    this.street=street;
    this.house_no=house_no;
    this.calculateAge = function() {
        return 2023-this.birthYear;
    }

    console.log(this);
}

//load with values the person1
let person1 = new adress('ken',2010,'Netherlands',null,'Manchester','orange',7); 
console.log(person1.calculateAge());
*/

//create object skeleton way2 
let adress = function(fullName,birthYear,country,state,city,street,house_no){
    this.fullName=fullName;
    this.birthYear=birthYear;
    this.country=country;
    this.state=state;
    this.city=city;
    this.street=street;
    this.house_no=house_no;
    this.calculateAge = function() {
        return 2023-this.birthYear;
    }
    console.log(this);
}
let person2 = new adress('Wendy',1901,'USA','New Jersey','York','apple',9); 
console.log(person2.calculateAge());