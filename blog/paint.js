const grid = document.getElementById("grid")


let isMouseDown = false
const totalCells = 5110
console.log(`total cells: ${totalCells}`)
let color = "purple"



for (let i = 0; i < totalCells; i++)
{
    const cell = document.createElement("div")
    cell.classList.add("cell")
    grid.appendChild(cell)
}

const cells = document.getElementsByClassName("cell")

for (let i = 0; i < cells.length; i++) {

    cells[i].addEventListener("mouseenter", (event) => {
        if (!isMouseDown) return

        event.target.style.backgroundColor = color
    })
}

document.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        isMouseDown = true
    }
})
document.addEventListener("mouseup", () => {
    isMouseDown = false
})


// for colorpicker
const colorButtons = document.querySelectorAll(".color")

colorButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        color = event.target.dataset.color

        colorButtons.forEach(b => b.style.border = "none")
        
        event.target.style.border = "2px solid white"
    })
})