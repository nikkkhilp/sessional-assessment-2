let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log('You have clicked the button.');


    const  xhr = new XMLHttpRequest();

    xhr.open('GET', 'nikhil.txt', true);
}