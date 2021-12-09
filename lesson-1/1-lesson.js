function cutString(str, num) {
  if (typeof str !== 'string') return;
  if (str.length > num) {
    return `${str.slice(0, num + 1)}...`;
  }
  
  return str;
}

//console.log(cutString('Hello World', 4));