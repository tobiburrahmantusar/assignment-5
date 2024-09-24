document.getElementById('donation-3')
    .addEventListener('click', function (event){
        event.preventDefault();

          const addMoneytext = document.getElementById('input-donation-money').value;
         const addMoneyNum = parseFloat(addMoneytext);
          const quotaDonationtext = document.getElementById("quota-donation").innerText
         const quotaDmoney = parseFloat(quotaDonationtext);
         const myMoneytext = document.getElementById("myBalance").innerText
         const myMoneyNum = parseFloat(myMoneytext);
          if(addMoneyNum>0 && myMoneyNum!=0){
               newQoutaDonation = quotaDmoney + addMoneyNum;
               myNewBalance = myMoneyNum - addMoneyNum;

               document.getElementById("myBalance").innerText = myNewBalance;
               document.getElementById("quota-donation").innerText = newQoutaDonation;
          }

    })