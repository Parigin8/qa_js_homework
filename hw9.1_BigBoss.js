const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
  
  function findValueByKey(company, companyName) {

    if (company.name === companyName){
        return company;
    }
    if(company.clients){
        for (let subcompany of company.clients) {
            const found = findValueByKey(subcompany, companyName);
            if (found) {
                return found;
            }
        }
    }

    if (company.partners) {
        for (let partner of company.partners) {
            const found = findValueByKey(partner, companyName);
            if (found) {
                return found;
            }
        }
    }
    return null;
}

//console.log(findValueByKey(company, 'Клієнт 1')); 
//console.log(findValueByKey(company, 'Клієнт 1.2'));
console.log(findValueByKey(company, 'Клієнт 1.2.3')); 
//console.log(findValueByKey(company, 'Клієнт 2'));
//console.log(findValueByKey(company, 'Клієнт 3'));