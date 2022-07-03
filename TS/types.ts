let number : number = 1;
let string : string = "hello world";
let numarr : number[] = [1, 2];
let strarr : string[] = ["a", "b"];
let boolean : boolean = false;
let boolarr : boolean[] = [true, false];

type Player = {
    name : string,
    age? : number
}

// const playerNico : {
//     name : string,
//     age? : number
//     //age : number
// } = {
//     name : "nico"
// }

// const playerLynn : {
//     name : string,
//     age? : number
// } = {
//     name : "lynn"
// }

const playerNico : Player = {
    name : "nico"
}

const playerLynn : Player = {
    name : "lynn",
    age : 12
}

function playerMaker(name: string) : Player{
    return {
        name
    }
}

const nico = playerMaker("nico")
//const nico = playerMaker()
//nico.age = 12