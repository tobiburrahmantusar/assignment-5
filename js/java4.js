document.getElementById("donation-btn")
    .addEventListener('click', function(event){
        document.getElementById("history-show").classList.add('hidden');
        document.getElementById("donation-show").classList.remove('hidden');
    })


    document.getElementById("history-btn")
    .addEventListener('click', function(event){
        document.getElementById("donation-show").classList.add('hidden');
        document.getElementById("history-show").classList.remove('hidden');
    })