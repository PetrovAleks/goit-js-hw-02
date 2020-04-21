const message = prompt('В какую страну оформить доставку?').toLowerCase();
const priceList = [100, 250, 170, 80, 120];

switch (message) {
  case 'китай':
    alert(`Доставка в Китай будет стоить ${priceList[0]} кредитов`);
    break;
  case 'чили':
    alert(`Доставка в Чили будет стоить ${priceList[1]} кредитов`);
    break;
  case 'австралия':
    alert(`Доставка в Австралию будет стоить ${priceList[2]} кредитов`);
    break;
  case 'индия':
    alert(`Доставка в Индию будет стоить ${priceList[3]} кредитов`);
    break;
  case 'ямайка':
    alert(`Доставка в Австралию будет стоить ${priceList[4]} кредитов`);
    break;
  default:
    alert('В вашей стране доставка не доступна');
}
