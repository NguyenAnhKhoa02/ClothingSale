class eventShowContentMenu{
    constructor(){

    }

    showContentMenu(id){
        document.getElementById(id).style.removeProperty('display')
        document.getElementById(id).classList.remove("hide")
        document.getElementById(id).classList.add("show")
    }
    
    dontShowContent(id){
        document.getElementById(id).style.display = "none"
    }
}
const eventShowContentMenu_ = new eventShowContentMenu()


function showContentButtonMenMenu() {
    eventShowContentMenu_.showContentMenu("showContentMenuForMen")
    document.getElementById("showContentMenuForMen").innerHTML="hello word"
}

function showContentButtonWomenMenu(){
    eventShowContentMenu_.showContentMenu("showContentMenuForWomen")
    document.getElementById("showContentMenuForWomen").innerHTML = "hellow world 2"
}