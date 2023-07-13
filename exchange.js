document.addEventListener('DOMContentLoaded', () => {
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const apiKey ="BtX0LFW/t0LCuaaByR46Pg==b2Ag1Y3Bxx32H2DD ";
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";


convert.addEventListener('click', () =>{
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = `${apiUrl}${currencyTotal}`;


    fetch(url, {

        headers:{ 
            'X-API-KEY': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const rate = data.exchange_rate
        console.log('rate', rate)
        const resultprice = amountTotal * rate;
        console.log('result', resultprice)
        result.innerHTML = `${amountTotal} USD = ${resultprice.toFixed(2)} ${currencyTotal}`;

    })
    .catch(error => {
        console.error('Request failed:', error);
        result.innerHTML = 'An error occurred please try again later.'
    })
})
})