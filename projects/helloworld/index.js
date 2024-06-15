/*
 * Define the width and height of the canvas
 */
const width = 400;
const height = 400;

/*
 * This is the entry point for the design of our canvas
 */
function designCanvas(ctx) {
    // Fill the background color
    ctx.fillStyle = "rgb(24, 24, 0)";
    ctx.fillRect(0, 0, width, height);

    // Draw some random shapes (triangles, circles, rectangles)
    drawRandomShapes(ctx, 200);

    // Write Hello World!!!
    ctx.fillStyle = "rgb(248, 240, 232)";
    ctx.font = "400 40px Lato";
    ctx.textAlign = "center";
    ctx.fillText("Hello World!!!", 200, 210);
}

/*
 * Draw 'count' number of random shapes like triangles, circles, and rectangles
 */
function drawRandomShapes(ctx, count) {
    ctx.strokeStyle = "rgb(86, 32, 10)";

    for (let i = 0; i < count; ++i) {
        const shape = Math.floor(Math.random() * 3) + 1;

        switch(shape) {
            case 1:
                drawRandomTriangle(ctx);
                break;
            case 2:
                drawRandomCircle(ctx);
                break;
            case 3:
                drawRandomRectangle(ctx);
                break;
        }
    }
}

/*
 * Draw a triangle shape of random size, direction, and position
 */
function drawRandomTriangle(ctx) {
    const x = Math.floor(Math.random() * 381) + 0;
    const y = Math.floor(Math.random() * 381) + 0;

    const scale = Math.floor(Math.random() * 5) + 4;
    const angle = Math.floor(Math.random() * 9) - 4;

    ctx.lineWidth = scale;
    ctx.translate(x, y);
    ctx.scale(1/scale, 1/scale);
    ctx.translate(50, 50);
    ctx.rotate((Math.PI / 4) * angle);
    ctx.translate(-50, -50);
    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.lineTo(0, 100);
    ctx.lineTo(100, 100);
    ctx.lineTo(50, 0);
    ctx.stroke();
    ctx.translate(50, 50);
    ctx.rotate(-(Math.PI / 4) * angle);
    ctx.translate(-50, -50);
    ctx.scale(scale, scale);
    ctx.translate(-x, -y);
    ctx.lineWidth = 1;
}

/*
 * Draw a circle shape of random size and position
 */
function drawRandomCircle(ctx) {
    const x = Math.floor(Math.random() * 381) + 0;
    const y = Math.floor(Math.random() * 381) + 0;

    const scale = Math.floor(Math.random() * 5) + 4;

    ctx.lineWidth = scale;
    ctx.translate(x, y);
    ctx.scale(1/scale, 1/scale);
    ctx.beginPath();
    ctx.arc(0, 0, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.scale(scale, scale);
    ctx.translate(-x, -y);
    ctx.lineWidth = 1;
}

/*
 * Draw a rectangle shape of random size, direction, and position
 */
function drawRandomRectangle(ctx) {
    const x = Math.floor(Math.random() * 381) + 0;
    const y = Math.floor(Math.random() * 381) + 0;

    const scale = Math.floor(Math.random() * 5) + 4;
    const angle = Math.floor(Math.random() * 9) - 4;

    ctx.lineWidth = scale;
    ctx.translate(x, y);
    ctx.scale(1/scale, 1/scale);
    ctx.translate(50, 50);
    ctx.rotate((Math.PI / 4) * angle);
    ctx.translate(-50, -50);
    ctx.beginPath();
    ctx.strokeRect(0, 0, 100, 100);
    ctx.translate(50, 50);
    ctx.rotate(-(Math.PI / 4) * angle);
    ctx.translate(-50, -50);
    ctx.scale(scale, scale);
    ctx.translate(-x, -y);
    ctx.lineWidth = 1;
}

export { width, height, designCanvas };
