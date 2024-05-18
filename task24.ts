// Task 24
let name_1:string = "Bushra"
let name_2:string = "Ali"
let name_3:string = "Miss Bushra Ali"
// part I
if (name_1 == name_3){
    console.log("These names are equal")
}
else
    console.log("These names are not equal")

if (name_1 != name_2){
    console.log("This statement is right")
}
else
    console.log("This statement is wrong")
// part II
 let age_1:number = 18
 let age_2:number = 22
 if (age_1 == 18){
    console.log("Eligible for vote")
 }
if (age_1 != 22){
    console.log("Eligible to caste vote in elder category")

}
// partIII
if (age_1 <= age_2){
    console.log("younger")
}
if (age_2 >= age_1){
    console.log ("older")
}
//  use && and || operator
 if(age_1== 18 && age_2 == 22){
    console.log("Eligible to caste a vote")
}
if
(age_1== 18 || age_2 != 22){
    console.log("Person is not eligible to caste a vote")
}
// check test whether the name present in array or not
let country:string [] = ["Pakistan","China","Singapor","Malaysia"]
if (country.includes("Pakistan")){
    console.log("Pakistan is in country list")
}
if (!country.includes("America")){
    console.log("America is not in country list")
}













