        // #001
        const popBtn = document.getElementById('popBtn');
        popBtn.addEventListener('click', popHandler);

        function popHandler() {
            
            // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            // const obj = JSON.parse(this.responseText);
            // document.write(this.responseText);
            // const list = document.getElementById('list');
            // str = " ";
            // for (key in obj)
            // {
            //     str += `<ol>${obj[key].name}</li>`;
            // }
            list.innerHTML = this.responseText;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
            
        
}

// #002
const popBtn2 = document.getElementById('popBtn2');
        popBtn2.addEventListener('click', popHandler2);

        function popHandler2() {
            
            // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            const obj = JSON.parse(this.responseText);
            // document.write(this.responseText);
            const list = document.getElementById('list');
            str = " ";
            for (key in obj)
            {
                str += `<li>${obj[key].name}</li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
            
        
}


// #003
const popBtn3 = document.getElementById('popBtn3');
        popBtn3.addEventListener('click', popHandler3);

        function popHandler3() {
            
            // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            const obj = JSON.parse(this.responseText);
            // document.write(this.responseText);
            const list = document.getElementById('list');
            str = " ";
            for (key in obj)
            {
                str += `<li>${obj[key].username}</li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
            
        
}