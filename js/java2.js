document.getElementById('donation-2')
    .addEventListener('click', function (event){
        event.preventDefault();

          const addMoneytext = document.getElementById('input-donation-money').value;
         const addMoneyNum = parseFloat(addMoneytext);
          const feniDonationMoneyText = document.getElementById("feni-donation-money").innerText
         const feniDonationMoneyNum = parseFloat(feniDonationMoneyText);
         const myMoneytext = document.getElementById("myBalance").innerText
         const myMoneyNum = parseFloat(myMoneytext);
          if(addMoneyNum>0 && myMoneyNum!=0){
               newFeniDonation = feniDonationMoneyNum+addMoneyNum;
               myNewBalance = myMoneyNum - addMoneyNum;

               document.getElementById("myBalance").innerText = myNewBalance;
               document.getElementById("feni-donation-money").innerText = newFeniDonation;
          }

    })