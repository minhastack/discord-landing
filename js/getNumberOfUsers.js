
async function setCanvas(){
    const canvas = document.querySelector(".members");
    fetch("https://3333-minhastack-memberslist-807f4wg896x.ws-us45.gitpod.io/members", {method: 'GET'}).then(res => {
    canvas.innerHTML += "teste";
    }); 
}


setCanvas();
