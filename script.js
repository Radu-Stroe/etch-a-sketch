const container = document.querySelector("div.content");

for(let i=0; i < 16; i++) {
    for(let j=0; j < 16; j++) {
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
        div.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "purple";
            setTimeout(function() {
                event.target.style.backgroundColor = "";
            }, 500);
        }, false)
    }
}