//Task 1-5
let a=5;
let b=10;
//1
let res=a+b;
console.log(res);
//2
res=b-a;
console.log(res);
//3
res=a*b;
console.log(res);
//4
res=b/a;
console.log(res)
//5
let c=12;
res=c%a;
console.log(res)
//Task 6
c+=3;
console.log(c)
//Task 7
c-=1
console.log(c)
//Task 8
res=a>b;
console.log(res)
res=a<b;
console.log(res)
//Task 9
let d=10;
res= a>=d;
console.log(res)
res= b>=d
console.log(res)
res= d<=c
console.log(res)
//Task 10
let e="10"
res= (d==c)
console.log(res)//show the result true as (==) operetor converts the string into number also
res= (d===c)
console.log(res)//show the result false as (===) operator do no convert anything
//Task 11
console.log((a<b)&&(b==d))//return true as when both the coditions will be true then only and operator return true
console.log((a>b)&&(b==d))//return false 
//Task 12
console.log((a>b)||(b==d))//return true as if atleast one condition gets true or operator will return true
console.log((a>b)||(b<d))//return false as both are false
//Task 13
console.log(!(a>b))//return true as the original a>b is false
//Task 14
let age=15
let result = (age>18)?"adult":"not adult";
console.log(result)


