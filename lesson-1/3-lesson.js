function createElDescription(arr) {
  const descriptionArr = [];

  arr.map((i, index) => {
    const descriptionObj = {
      elementValue: i,
      elementType: typeof i,
      elementIndex: index,
    };

    descriptionArr.push(descriptionObj);
  })

  return descriptionArr;
}

//console.log(createElDescription([1, 'hello', true]));