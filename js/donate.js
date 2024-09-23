// donate-now1
document.getElementById('donate-now1').addEventListener('click', function() {
    const donateAmount1 = getInputValueByID('donate-amount1')
    const currentBalance1 = getTextValueByID('current-balance1')
    const mainBalance = getTextValueByID('main-balance');
    if (!isNaN(donateAmount1) && donateAmount1 > 0) {
        const totalAmount = donateAmount1 + currentBalance1;
        document.getElementById('current-balance1').innerText = totalAmount;
        const afterMainBalance = mainBalance - donateAmount1;
        document.getElementById('main-balance').innerText = afterMainBalance;
        document.getElementById('donate-amount1').value = ' ';

        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime.toString();

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card bg-base-100 w-full shadow-xl">
                <div class="card-body">
                <h2 class="card-title">${donateAmount1} Taka is Donated for famine-2024 at Noakhali, Bangladesh </h2>
                 <p>${formattedDateTime}</p>
                </div>
            </div>
        `
        document.getElementById('history-part').appendChild(div);
    } else {
        alert('wrong input');

    }
})

// donate-now2
document.getElementById('donate-now2').addEventListener('click', function() {
    const donateAmount2 = getInputValueByID('donate-amount2')
    const currentBalance2 = getTextValueByID('current-balance2')
    const mainBalance = getTextValueByID('main-balance');
    if (!isNaN(donateAmount2) && donateAmount2 > 0) {
        const totalAmount = donateAmount2 + currentBalance2;
        document.getElementById('current-balance2').innerText = totalAmount;
        const afterMainBalance = mainBalance - donateAmount2;
        document.getElementById('main-balance').innerText = afterMainBalance;
        document.getElementById('donate-amount2').value = ' ';

        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime.toString();

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card bg-base-100 w-full shadow-xl">
                <div class="card-body">
                <h2 class="card-title">${donateAmount2} Taka is Donated for Flood Relief in Feni, Bangladesh </h2>
                 <p>${formattedDateTime}</p>
                </div>
            </div>
        `
        document.getElementById('history-part').appendChild(div);
    } else {
        alert('wrong input');

    }
})

// donate-now3
document.getElementById('donate-now3').addEventListener('click', function() {
    const donateAmount3 = getInputValueByID('donate-amount3')
    const currentBalance3 = getTextValueByID('current-balance3')
    const mainBalance = getTextValueByID('main-balance');
    if (!isNaN(donateAmount3) && donateAmount3 > 0) {
        const totalAmount = donateAmount3 + currentBalance3;
        document.getElementById('current-balance3').innerText = totalAmount;
        const afterMainBalance = mainBalance - donateAmount3;
        document.getElementById('main-balance').innerText = afterMainBalance;
        document.getElementById('donate-amount3').value = ' ';

        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime.toString();

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card bg-base-100 w-full shadow-xl">
                <div class="card-body">
                <h2 class="card-title">${donateAmount3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h2>
                 <p>${formattedDateTime}</p>
                </div>
            </div>
        `
        document.getElementById('history-part').appendChild(div);
    } else {
        alert('wrong input');

    }
})