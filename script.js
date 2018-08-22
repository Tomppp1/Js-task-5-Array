"use strict"
// let number =prompt("Enter a number from 1 to 6");
// let x = [ "Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy","Tyrion Lannister", "Arya Stark"]
//     if (number==="1"){
//         document.write(x[0]);
//     }else if(number==="2"){
//         document.write(x[1]);
//     }else if(number==="3"){
//         document.write(x[2]);
//     }else if(number==="4"){
//         document.write(x[3]);
//     }else if(number==="5"){
//         document.write(x[4]);
//     }else if(number==="6"){
//         document.write(x[5]);
//     }else{
//         prompt("Enter a number from 1 to 6");
//     }


let number =prompt("Enter a number from 1 to 6");
let x = [ "Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy","Tyrion Lannister", "Arya Stark"]
    if (number >=1 || number <=6){
        document.write(x[number-1]);
    }else {
        prompt("Enter a number from 1 to 6")
    }
