const amt = document.querySelector("#bal");
const received = document.querySelector("#rcvd");
const btn = document.querySelector("button");
const output = document.querySelector(".denoms");

// Currencies
const curr = [2000, 500, 100, 20, 10, 5, 1];


btn.addEventListener('click', () => {
    const billAmt = Number(amt.value);
    const cash = Number(received.value);

    if (billAmt != 0 && cash != 0) {
        balance = cash - billAmt;
        balance === 0 ? output.innerText = "\nNo Balance 🤗\n\n" : cash > billAmt ? denomCalc(balance) : output.innerText = "\nInsufficient Cash 🙃\n\n" ;
    }else if(billAmt === 0){
        amt.placeholder = "Bill amount ?";
    } else {
        received.placeholder = "How much received ?";
    }
}, false);

// Logic

const denomCalc = (bal) => {
    
    document.querySelector('h4').innerText = "\nDenominations\n";
    curr.map((money) => {
        let num = Math.floor(bal / money);
        bal -= num * money;
        if (num != 0) {
            output.innerText += `\n ₹ ${money} x ${num} 💵 ` ;
        }
    });
} 

window.onload = "init";