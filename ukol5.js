let soucet = 0

let cislo = Number (prompt("Zadej cislo:"))

while (cislo !==0){
  soucet += cislo //soucet + cislo
  console.log("zadane cislo:" + cislo)
  console.log("Naakumulovany soucet:"+ soucet)
  cislo = Number (prompt("Zadej cislo:"))
}