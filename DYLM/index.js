function Yes(){
    window.alert("I Love You Two..");
}

const hello = document.querySelector('button.button--no');
hello.addEventListener("mouseover", () => {
    const p = Math.floor(Math.random()*300)+1;
    const q = Math.floor(Math.random()*300)+1;

    hello.style.left = p + 'px';    
    hello.style.top = q + 'px';
})
       