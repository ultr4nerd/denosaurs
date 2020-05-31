const response = await fetch('https://rickandmortyapi.com/api/character/1');
const { name, status, species } = await response.json();

console.log(name, status, species);

const text = await Deno.readTextFile('./archivo.txt');
console.log(text);
