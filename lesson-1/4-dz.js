function getUrl(arr) {
  if (!Array.isArray(arr)) return;

  let url = '';
  let max = 0;

  arr.map((item) => {
    if (item.width * item.height > max) {
      max = item.width * item.height;
      url = item.url;
    }
  });

  return url;
}

const boxarts = [
  { width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" 
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" 
  } 
];

//console.log(getUrl(boxarts));