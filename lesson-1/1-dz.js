function divideGenders(arr) {
  if (!Array.isArray(arr)) return;

  const gendersObj = {female: [], male: []};

  arr.forEach((item) => {
    item.fullName = `${item.first_name} ${item.last_name}`;

    delete item.first_name;
    delete item.last_name;

    if (item.gender.toLowerCase() === 'female') {
      gendersObj.female.push(item);
    } else if (item.gender.toLowerCase() === 'male') {
      gendersObj.male.push(item);
    }
  })

  return gendersObj;
}

const users = [ 
  { id: 1, first_name: 'Jeanette',
    last_name: 'Penddreth',
    email:'jpenddreth0@census.gov',
    gender: 'female',
    ip_address: '26.58.193.2',
  },  
  { id: 2,
    first_name: 'Petr',
    last_name: 'Jackson',
    email: 'gfrediani1@senate.gov',
    gender: 'male',
    ip_address: '229.179.4.212',
  }, 
];

//console.log(divideGenders(users));