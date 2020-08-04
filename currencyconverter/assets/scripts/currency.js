var display = "";
var amount; 

function changeCurrency(){
    var sel1 = document.getElementById('sel1').value;
    var sel2 = document.getElementById('sel2').value;
    amount = document.getElementById('current').value;

    var  euroSel1, usDollarSel1, poundSel1, yenSel1, caDollarSel1;
    var euroSel2, usDollarSel2, poundSel2, yenSel2, caDollarSel2;

    
	euroSel1 = document.querySelectorAll('.euroSel1 input');
    usDollarSel1 = document.querySelectorAll('.usDollarSel1 input');
    poundSel1 = document.querySelectorAll('.poundSel1 input');
    yenSel1 = document.querySelectorAll('.yenSel1 input');
    caDollarSel1 = document.querySelectorAll('.caDollarSel1 input');
    
	euroSel2 = document.querySelectorAll('.euroSel2 input');
    usDollarSel2 = document.querySelectorAll('.usDollarSel2 input');
    poundSel2 = document.querySelectorAll('.poundSel2 input');
    yenSel2 = document.querySelectorAll('.yenSel2 input');
    caDollarSel2 = document.querySelectorAll('.caDollarSel2 input');

    if(sel1 == 'euroSel1' && sel2 == 'usDollarSel2') {
        var usDollar;
        usDollar = amount * 1.12;

        document.getElementById("euro-usDollar").innerHTML = amount + " Euros equals " + usDollar.toFixed(2) + " US Dollars";
    }

    if(sel1 == 'euroSel1' && sel2 == 'poundSel2') {
        var pound;
        pound = amount * 0.90;

        document.getElementById("euro-pound").innerHTML = amount + " Euros equals " + pound.toFixed(2) + " Pounds sterling";

    }

    if(sel1 == 'euroSel1' && sel2 == 'yenSel2') {
        var yen;
        yen = amount * 119.82;

        document.getElementById("euro-yen").innerHTML = amount + " Euros equals " + yen.toFixed(2) + " Japanese Yen";
    }

    if(sel1 == 'euroSel1' && sel2 == 'caDollarSel2') {
        var caDollar;
        caDollar = amount * 1.52;

        document.getElementById("euro-caDollar").innerHTML = amount + " Euros equals " + caDollar.toFixed(2) + " Canadian Dollars";
    }

    if(sel1 == 'usDollarSel1' && sel2 == 'euroSel2') {
        var euro;
        euro = amount * 0.89;

        document.getElementById("usDollar-euro").innerHTML = amount + " US Dollars equals " + euro.toFixed(2) + " Euros";
    }

    if(sel1 == 'usDollarSel1' && sel2 == 'poundSel2') {
        var pound;
        pound = amount * 0.81;

        document.getElementById("usDollar-pound").innerHTML = amount + " US Dollars equals " + pound.toFixed(2) + " Pounds sterling";
    }

    if(sel1 == 'usDollarSel1' && sel2 == 'yenSel2') {
        var yen;
        yen = amount * 106.93;

        document.getElementById("usDollar-yen").innerHTML = amount + " US Dollars equals " + yen.toFixed(2) + " Japanese Yen";
    }

    if(sel1 == 'usDollarSel1' && sel2 == 'caDollarSel2') {
        var caDollar;
        caDollar = amount * 1.36;

        document.getElementById("usDollar-caDollar").innerHTML = amount + " US Dollars equals " + caDollar.toFixed(2) + " Canadian Dollar";
    }

    if(sel1 == 'poundSel1' && sel2 == 'euroSel2') {
        var euro;
        euro = amount * 1.11;

        document.getElementById("pound-euro").innerHTML = amount + " Pounds sterling equals " + euro.toFixed(2) + " Euros";
    }

    if(sel1 == 'poundSel1' && sel2 == 'usDollarSel2') {
        var usDollar;
        usDollar = amount * 1.24;

        document.getElementById("pound-usDollar").innerHTML = amount + " Pounds sterling equals " + usDollar.toFixed(2) + " US Dollars";

    }

    if(sel1 == 'poundSel1' && sel2 == 'yenSel2') {
        var yen;
        yen = amount * 132.80;

        document.getElementById("pound-yen").innerHTML = amount + " Pounds sterling equals " + yen.toFixed(2) + " Japanese Yen";
    }

    if(sel1 == 'poundSel1' && sel2 == 'caDollarSel2') {
        var caDollar;
        caDollar = amount * 1.69;

        document.getElementById("pound-caDollar").innerHTML = amount + " Pounds sterling equals " + caDollar.toFixed(2) + " Canadian Dollar";
    }

    if(sel1 == 'yenSel1' && sel2 == 'euroSel2') {
        var euro;
        euro = amount * 0.0083;

        document.getElementById("yen-euro").innerHTML = amount + " Japanese Yen equals " + euro.toFixed(2) + " Euros";
    }

    if(sel1 == 'yenSel1' && sel2 == 'usDollarSel2') {
        var usDollar;
        usDollar = amount * 0.0094;

        document.getElementById("yen-usDollar").innerHTML = amount + " Japanese Yen equals " + usDollar.toFixed(2) + " US Dollars";
    }

    if(sel1 == 'yenSel1' && sel2 == 'poundSel2') {
        var pound;
        pound = amount * 0.0075;

        document.getElementById("yen-pound").innerHTML = amount + " Japanese Yen equals " + pound.toFixed(2) + " Pounds sterling";
    }

    if(sel1 == 'yenSel1' && sel2 == 'caDollarSel2') {
        var caDollar;
        caDollar = amount * 0.013;

        document.getElementById("yen-caDollar").innerHTML = amount + " Japanese Yen equals " + caDollar.toFixed(2) + " Canadian Dollars";
    }

    if(sel1 == 'caDollarSel1' && sel2 == 'euroSel2') {
        var euro;
        euro = amount * 0.66;

        document.getElementById("caDollar-euro").innerHTML = amount + " Canadian Dollars equals " + euro.toFixed(2) + " Euros";
    }

    if(sel1 == 'caDollarSel1' && sel2 == 'usDollarSel2') {
        var usDollar;
        usDollar = amount * 0.74;

        document.getElementById("caDollar-usDollar").innerHTML = amount + " Canadian Dollars equals " + usDollar.toFixed(2) + " US Dollars";
    }

    if(sel1 == 'caDollarSel1' && sel2 == 'poundSel2') {
        var pound;
        pound = amount * 0.59;

        document.getElementById("caDollar-pound").innerHTML = amount + " Canadian Dollars equals " + pound.toFixed(2) + " Pounds sterling";
    }

    if(sel1 == 'caDollarSel1' && sel2 == 'yenSel2') {
        var yen;
        yen = amount * 78.59;

        document.getElementById("caDollar-yen").innerHTML = amount + " Canadian Dollars equals " + yen + " Japanese Yen";
    }

}

