let currencyEl_one = document.querySelector('#currency-one');
let currencyEl_two = document.querySelector('#currency-two');
let amountEl_one = document.querySelector('#amount-one')
let amountEl_two = document.querySelector('#amount-two')
let rateEl = document.querySelector('#rate')

let swap = document.querySelector('#swap')

function cal() {
    console.log(currencyEl_one.value);
    let currency_one = currencyEl_one.value;
    let currency_two = currencyEl_two.value;
    fetch("https://open.exchangerate-api.com/v6/latest").then(res => res.json()).then(data => {
        console.log(data);
        let rate = data.rates[currency_two] /
            data.rates[currency_one]
        amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
        rateEl.innerHTML = `1 ${currency_one}=${rate.toFixed(3)} ${currency_two}`
    })
}
cal()

swap.addEventListener('click', function () {
    [currencyEl_one.value, currencyEl_two.value] = [currencyEl_two.value, currencyEl_one.value]
    cal()
})

currencyEl_one.addEventListener('change', cal)
currencyEl_two.addEventListener('change', cal)
amountEl_one.addEventListener('input', cal)
amountEl_two.addEventListener('input', cal)
