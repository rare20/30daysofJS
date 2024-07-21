//Task 1 Number check script
let num=15
//here is the given function which will tell whether the number given is positive negative or zero
if(num>0){
    console.log("the given number ",num,"is positive");
}
else if(num==0){
    console.log("the given number ",num,"is zero");
}
else{
    console.log("the given number ",num,"is negative");
}
num=0;
if(num>0){
    console.log("the given number ",num,"is positive");
}
else if(num==0){
    console.log("the given number ",num,"is zero");
}
else{
    console.log("the given number ",num,"is negative");
}
num=-3;
if(num>0){
    console.log("the given number ",num,"is positive");
}
else if(num==0){
    console.log("the given number ",num,"is zero");
}
else{
    console.log("the given number ",num,"is negative");
}
//Task 2  voting eligibility script
let age=20
if(age>=18){
    console.log("the person is eligible to vote");
}
else{
    console.log("the person is not eligible to vote");
}
//Task 3 
let a=10 , b=8 , c=14
if(a>b){
    if(a>c){
        console.log(a,"is the largest number among three numbers")
    }
    else{
        console.log(c,"is the largest number among three numbers")
    }
}
 else{
    if(b>c){
        console.log(b,"is the largest number among three numbers")
    }
    else{
        console.log(c,"is the largest number among three numbers")
    }
 }   

 //Task 4
 let day=new Date;
 let val= day.getDay();
 switch(val){
    case 1: console.log("Monday is the day")
    break;
    case 2: console.log("Tueday is the day")
    break;
    case 3: console.log("Wednesday is the day")
    break;
    case 4: console.log("Thursday is the day")
    break;
    case 5: console.log("Friday is the day")
    break;
    case 6: console.log("Saturday is the day")
    break;
    case 7: console.log("Sunday is the day")
    break;
 }

 //Task 5
 let score=88
 switch(true){
    case (score>=90): console.log("Grade is A")
    break;
    case (score>=80 && score<90): console.log("Grade is B")
    break;
    case (score>=70 && score<80): console.log("Grade is C")
    break;
    case (score>=60 && score<70): console.log("Grade is D")
    break;
    case (score>=40 && score<60): console.log("Grade is E")
    break;
   case(score<40):console.log("Grade is F")
    break;
    default:
        console.log("Invalid score , cannot get a grade")
        break;
 }

 //Task 6
 let number = 25
 res= (number%2==0)?"Even":"Odd";
 console.log("the given no is ",res);

 //Task 7
 let year=4300;
 if((year%4==0 && year%100!=0)||(year%400==0)){
    console.log("the given year is leap year");

 }
 else{
    console.log("the given year is not a leap year");
 }

