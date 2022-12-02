
const gifts = ['book', 'game', 'socks'];
var result;
function wrapping(gifts) {
  let resultado=[];
  let asterisco=[];
 resultado=gifts.map(item =>{
  return item.length+2
 })

console.log(resultado)
console.log(asterisco)
  result= gifts.map((elemento)=>{
   return `*${elemento}*`
  });
 console.log(result) 
    return result
  }
  wrapping(gifts);
  console.log(result); 