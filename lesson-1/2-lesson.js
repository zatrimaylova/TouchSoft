function countSymbols(data) {
  const counter = {}
  let max = 0;
  
  data.forEach(element => {
    if (counter[element]) {
      counter[element] += 1;
    } else {
      counter[element] = 1;
    }
    if (counter[element] > max) max = element;
  });
  
  return max;
}

//console.log(countSymbols([1,1,1,2,4,5]));