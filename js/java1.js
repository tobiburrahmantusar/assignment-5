document.getElementById('donation-1')
    .addEventListener('click', function (event){
        event.preventDefault();

          let addMoneytext = document.getElementById('input-donation-money').value;
         let addMoneyNum = parseFloat(addMoneytext);
          const noakhaliDonationMoneyText = document.getElementById("noakhali-donation-money").innerText
         const noakhaliDonationMoneyNum = parseFloat(noakhaliDonationMoneyText);
         const myMoneytext = document.getElementById("myBalance").innerText
         const myMoneyNum = parseFloat(myMoneytext);
          if(addMoneyNum>0 && myMoneyNum!=0){
               newNoakhaliDonation = noakhaliDonationMoneyNum+addMoneyNum;
               myNewBalance = myMoneyNum - addMoneyNum;
               document.getElementById("myBalance").innerText = myNewBalance;
               document.getElementById("noakhali-donation-money").innerText = newNoakhaliDonation;
          }
          alert("Congratulations!");
})
