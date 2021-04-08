const amt = document.querySelector("#bal");
const received = document.querySelector("#rcvd");
const btn = document.querySelector("button");
const output = document.querySelector(".denoms");

// Currencies
const curr = [2000, 500, 100, 20, 10, 5, 1];


btn.addEventListener('click', () => {
    const billAmt = Number(amt.value);
    const cash = Number(received.value);
    // console.log(billAmt);
    balance = cash - billAmt;
    // console.log(balance);
    balance === 0 ? console.log("No balance") : cash < billAmt ? console.log("Insufficient cash") : denomCalc(balance);
})

// Logic
const denomCalc = (bal) => {
    curr.map((money) => {
        let num = Math.floor(bal / money);
        bal -= num * money;
        if (num != 0) {
            console.log(`${num} x $ ${money}`);
        }
    });
} 
