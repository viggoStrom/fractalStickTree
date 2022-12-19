/** @type {HTMLCanvasElement} */


class ground {
    constructor() {
        this.yPosition = canvas.height * 8 / 10
        this.height = canvas.height * 2 / 10
    }

    draw = () => {
        ctx.fillStyle = "#252525"
        ctx.fillRect(0, this.yPosition, canvas.width, this.height)
    }
}