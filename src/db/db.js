
function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

export function getData() {
  let r = httpGet('https://onetwosneaker.ru/api2/vegetables/')
  let foods = []
  for (let i in r) {
    foods.push({
      id: r[i]['id'],
      title: r[i]['title'],
      price: r[i]['price'],
      Image: r[i]['image1'],
      weight: r[i]['weight'] === "G" ? "Г" : "КГ"
    })
  }
  return foods
}


// export function getData() {
//   return [
//     { title: "Помидоры Агрофуд", price: 96, weight: "КГ" ,Image: Pomidor,id:1 },
//     { title: "Огурцы гладкие", price: 102, weight: "КГ" ,Image: Ogurci,id:2 },
//     { title: "Капуста Б/к молодая", price: 31.2,weight: "КГ" ,Image: Capusta ,id:3},
//     { title: "Капуста красная", price: 72, weight: "КГ" ,Image: CapustaRED,id:4 },
//     { title: "Лук репчатый", price: 42, weight: "КГ" ,Image: saladImg,id:5 },
//     { title: "Чеснок с/в", price: 148, weight: "КГ" ,Image: waterImg,id:6 },
//     { title: "Картофель фри", price: 120, weight: "КГ" ,Image: iceCreamImg,id:7 },
//   ];
// }
