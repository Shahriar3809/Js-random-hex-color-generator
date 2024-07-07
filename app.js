window.onload = () => {
    main()
}

function main() {
    console.log(generateHexColor())
    const btn = document.getElementById('change-btn');
    const root = document.getElementById('root')
    btn.addEventListener('click', ()=> {
        root.style.backgroundColor = generateHexColor();
        const output = document.getElementById("output");
        output.value = generateHexColor();
    })
}


function generateHexColor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const hex = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    return hex;
}