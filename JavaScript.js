function generateNumber(){
    const min = Math.ceil( document.querySelector(".inputMin").value)
    const max = Math.floor( document.querySelector(".inputMax").value)
    const mensage = document.querySelector(".message")
    const inputResult = document.querySelector(".input-result")

    const resut = Math.floor(Math.random()*(max-min+1))+min;
    mensage.innerHTML = `O número sorteado é:`
    inputResult.innerHTML = resut
}

 

