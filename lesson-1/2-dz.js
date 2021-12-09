function createObject(arr) {
  if (!Array.isArray(arr)) return;

  const resObj = arr.reduce((result, item) => {
    result[item.id] = item.title;
    return result;
  }, {})

  return resObj;
}

const videos = [
  {
    id: 65432445,
    title: "The Chamber"
  },
  {
    id: 675465,
    title: "Fracture"
  },
  {
    id: 70111470,
    title: "Die Hard"
  }, 
  {
    id: 654356453,
    title: "Bad Boys"
  }
];

//console.log(createObject(videos));