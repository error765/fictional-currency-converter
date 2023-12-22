function getSelectedOption() {
    const realcurrencyelement = document.getElementById("real-currency");
    const realcurrencyoption = realcurrencyelement.options[realcurrencyelement.selectedIndex].value;
    const realcurrencyinput = parseFloat(document.getElementById("rcur").value);
    const fakecurrencyelement = document.getElementById("fictional-currency");
    const fakecurrencyoption = fakecurrencyelement.options[fakecurrencyelement.selectedIndex].value;
    let ficcur = 0;
    if (realcurrencyoption === "Dollars") {
        if (fakecurrencyoption === "V-bucks") {
            ficcur = Math.round(realcurrencyinput * 1000 / 9);
        }
        if (fakecurrencyoption === "Robux") {
            ficcur = Math.round(realcurrencyinput * 1000 / 9.99);
        }
    }
    if (realcurrencyoption === "Cents") {
    if (fakecurrencyoption === "V-bucks") {
        ficcur = Math.round(realcurrencyinput * 10 / 9);
     }
        if (fakecurrencyoption === "Robux") {
            ficcur = Math.round(realcurrencyinput * 10 / 9.99);
        }
    }
    if (realcurrencyoption === "Yen") {
        if (fakecurrencyoption === "V-bucks") {
            ficcur = Math.round(realcurrencyinput * 1000 / 1280.10);
        }
        if (fakecurrencyoption === "Robux") {
            ficcur = Math.round(realcurrencyinput * 1000 / 1420.06);
        }
    }
    if (realcurrencyoption === "Pounds") {
        if (fakecurrencyoption === "V-bucks") {
            ficcur = Math.round(realcurrencyinput * 1000 / 7.10);
        }
        if (fakecurrencyoption === "Robux") {
            ficcur = Math.round(realcurrencyinput * 1000 / 7.89);
        }
    }
    if (ficcur < 0) {
        const myElement = document.querySelector('#fcur');
        myElement.setAttribute('value', 0);
    } else {
        const myElement = document.querySelector('#fcur');
        myElement.setAttribute('value', ficcur);
    }
}