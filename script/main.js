/** @type {HTMLCanvasElement} */


const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.height = 1000
canvas.width = canvas.height * 16 / 10

const floor = new ground()

const frame = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    floor.draw()

    window.requestAnimationFrame(frame)
}

window.requestAnimationFrame(frame)