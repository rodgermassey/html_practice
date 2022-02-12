window.onload=init;

function init()
{
    
        let button = document.getElementById("addsongbutton");
        button.onclick = buttonWasClicked;
}


function buttonWasClicked()
{
       
           let textinput = document.getElementById("inputbox");
           let songname = textinput.value;

           let li = document.createElement("li");
           li.innerHTML = songname;

           let ul = document.getElementById("playlist");
           ul.appendChild(li);

           alert("adding song "+songname);
    

}

// we can also pass the reference of the buttonWasClicked function in the following manner:-

/*button.onclick = function buttonWasClicked() // reference to buttonWasClicked function is passed here
        {   
           let textinput = document.getElementById("inputbox");
           let songname = textinput.value;

           let li = document.createElement("li");
           li.innerHTML = songname;

           let ul = document.getElementById("playlist");
           ul.appendChild(li);

        alert("adding song "+songname);
        } */