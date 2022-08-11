let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log('You have clicked the button.');


    const  xhr = new XMLHttpRequest();

    xhr.open('GET', 'nikhil.txt', true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.log("some error occured.")
        }
    }

    xhr.send();
}