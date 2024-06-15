import { loadFonts } from "./fonts.js";

import { width, height, designCanvas } from "../projects/helloworld/index.js";

await loadFonts();

const canvas = document.getElementById("canvas");

canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext("2d");
designCanvas(ctx);
