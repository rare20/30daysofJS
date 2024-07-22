//Task 1
for(let i=1;i<=10;i++){
    console.log(i);
}//print 1-10 no

//Task 2--> print the table of 5 using a for loop
for(let i=1;i<=10;i++){
    console.log("5 x ",i," = ", 5*i);
}
//Task 3-->sum of no from 1-10 using while loop
let num=10
let sum=0;
while(num>0){
    sum+=num;
    num--;
}
console.log("sum of numbers from 1-10 = ",sum);
//Task 4-->write no form 10-1 using while loop
num=10;
while(num>0){
    console.log(num);
    num--;
}
//Task 5-->write no from 1-5 using do-while loop
num=5
do{
   console.log(num)
   num--; 
}while(num>0)

//Task 6-->factorial of num using do while loop
num=prompt("Enter the no of which you want factorial")  
let fac=1;
do{
fac=fac*num;
num--;

}while(num>0)
console.log("the factorial of num= ",fac);

//Task 7

for(let i=1;i<=5;i++){
    str=''
    for(let j=1;j<=i;j++){
        str=str+'* '
    }
    console.log(str)
}

//Task 8-->skip no 5 to print using continue

for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i)
}

//Task 9-->stop the loop when no is 7 using break

for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i)
}
