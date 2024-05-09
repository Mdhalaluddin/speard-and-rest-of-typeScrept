{
//speard & rest
// object types
const players: string[] =[
    "Cr7",
    "massi",
    "De Maria",
    "Marcelo",
    "De-Bruyn",
    "Marcelo",
    "Mohammad Salah"
];

const play = {players: {...players}};

const [a, b, , , , c, ...rest] = players;

console.log(a);
console.log(b);
console.log(c);
console.log(rest);




///
}