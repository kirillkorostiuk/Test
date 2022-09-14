function moneyConverter () { 
  const dol = document.getElementById('inputdol').value
  const price = document.getElementById('inputPrice').value
  document.getElementById('outputBTC').innerHTML = dol*1/price
}