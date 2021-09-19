const btn = document.querySelector("button");
let output = document.querySelector(".denoms");

// Currencies
const curr = [2000, 500, 100, 20, 10, 5, 1];

btn.addEventListener('click', () => {
    const amt = document.querySelector("#bal");
    const received = document.querySelector("#rcvd");
    
    let billAmt = Number(amt.value);
    let cash = Number(received.value);

    if (billAmt != 0 && cash != 0) {
        balance = cash - billAmt;
        balance === 0 ? output.innerText = "\nNo Balance 🤗\n\n" : cash < billAmt ? output.innerText = "\nInsufficient Cash 🙃\n\n" :  denomCalc(balance);
    }else if(billAmt === 0){
        amt.placeholder = "Bill amount ?";
    } else {
        received.placeholder = "How much received ?";
    }
}, false);

// Logic

function denomCalc(bal) {
    output.innerText = "";
    curr.map((money) => {
        let num = Math.floor(bal / money);
        bal -= num * money;
        if (num != 0) {
            output.innerText += `\n ₹ ${money} x ${num} 💵 ` ;
        }
    });
} 

window.onload = "init";