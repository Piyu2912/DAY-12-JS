const ele = document.getElementsByTagName("h1");
console.log(ele[0].innerText);

const ele1 = document.getElementsByClassName("para");
console.log(ele1[0].innerText);

const ele2 = document.getElementById("paraid");
console.log(ele2.innerText);

function clickhere() {
    const text = document.getElementsByTagName("h1");
    text[0].innerText = "Welcome Onboard";
    text[0].style.color = "red";
    text[0].style.backgroundColor = "grey";

    const text1 = document.getElementById("paraid");
    text1.innerText = "Here was Lorem Ipsum text";
}

function innertext() {
    const ele3 = document.getElementById("task").innerText;
    alert(ele3);
}

function innerhtml() {
    const ele4 = document.getElementById("task").innerHTML;
    console.log(ele4)
}

function create(){
    //Creating elements
    const ele5 = document.createElement("h1");
    ele5.setAttribute("id","dom");
    ele5.innerText = "It is created using DOM"
    console.log(ele5)
    //Appending the child on screen
    document.getElementById("parent").appendChild(ele5);
}