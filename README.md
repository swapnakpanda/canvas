# canvas

A **simple, minimal, and powerful JavaScript HTML5 canvas-based framework**.

## Features

- Allows using any type of font
- Generates images in PNG
- Modular: Define the design logic in a separate JS file.
- Customize: Easily define the dimension (width and height) of the canvas.

## Quick Start

Follow these steps to quickly start:

1. Clone this repo to local system
2. Go to the project directory and start any web server (e.g., live-server). This is important because we are using ESM (EcmaScript Modules).
3. Open the index.htm in your preferred browser. E.g., localhost:8080/index.htm

## Creating an image

Here are the steps to create an image:

1. Create a project directory for this image inside `projects` directory.
2. Add a new JS file inside the newly created project directory.
3. Add these lines in the JS file

```jsx
/*
 * Define the width and height of the canvas
 */
const width = 400;
const height = 400;

/*
 * This is the entry point for the design of our canvas
 */
function designCanvas(ctx) {

}

export { width, height, designCanvas };
```

4. Add the code for image generation inside `designCanvas` function. E.g.,

```jsx
function designCanvas(ctx) {
    ctx.fillStyle = "rgb(24, 24, 0)";
    ctx.fillRect(0, 0, width, height);
}
```

5. Add the below line in the `js/canvas.js`

```jsx
import { width, height, designCanvas } from "<projectdirectory>/<JSFile>";
```

6. If the web server is not yet started, follow the [Quick Start](https://www.notion.so/README-942bf58724c841a8be2c56f623cb9183?pvs=21) section.

## Adding a new font

`canvas` framework supports adding new fonts and manages them effectively. Follow these steps:

1. Do you have the font file (e.g., a TTF file) with you in your local system? Or, are you going to import the font from any font provider (like Google Fonts or, Adobe Fonts, etc.)? For the first case, add the font file inside the `assets/fonts` directory. For the second case, we don’t have to add any file.
2. Open `config/fonts.json`
3. Add an entry for the font. E.g.,

```jsx
[
    {
        "font-family": "Lato",
        "font-style": "normal",
        "font-weight": 400,
        "src": "url(https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2')",
    }
]
```

4. Use this font in your code.

```jsx
function designCanvas(ctx) {
    ctx.fillStyle = "rgb(248, 240, 232)";
    ctx.font = "400 40px Lato";
    ctx.textAlign = "center";
    ctx.fillText("Hello World!!!", 200, 210);
}
```