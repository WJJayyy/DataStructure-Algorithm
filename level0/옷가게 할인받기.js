function solution(price) {
  if (price >= 100000 && price < 300000) {
    return Math.floor(price * 0.95);
  }

  if (price >= 300000 && price < 500000) {
    return Math.floor(price * 0.9);
  }

  if (price >= 500000) {
    return Math.floor(price * 0.8);
  }
  return price;
} 

function solution(price) {
  var answer = 0;
  if(price >= 100000 && price < 300000){
    return Math.floor (answer = price *0.95)
  } 
  if (price >= 300000 && price < 500000) {
    return Math.floor( answer = price * 0.9)
  }if (price >= 500000) {
     return Math.floor (answer = price * 0.8)
  }
 return price // 10만원 이하일때 조건
}