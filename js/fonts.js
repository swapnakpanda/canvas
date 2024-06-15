import fonts from "../config/fonts.json" with { type: 'json' };

async function loadFonts() {
    await Promise.all(fonts.
        filter(isValidFont).
        map(font => getFontFace(font).load())
    ).then(fonts => {
        fonts.forEach(font => document.fonts.add(font))
    });
}

function isValidFont(font) {
    return font["font-family"] && font["src"];
}

function getFontFace(font) {
    const family = font["font-family"];
    const src = font["src"];

    const ascentOverride = font["ascent-override"];
    const descentOverride = font["descent-override"];
    const display = font["font-display"];
    const featureSettings = font["font-feature-settings"];
    const lineGapOverride = font["line-gap-override"];
    const stretch = font["font-stretch"];
    const style = font["font-style"];
    const unicodeRange = font["unicode-range"];
    const variationSettings = font["font-variation-settings"];
    const weight = font["font-weight"];
    const sizeAdjust = font["size-adjust"];

    const descriptors = {
        ...(ascentOverride && {ascentOverride}),
        ...(descentOverride && {descentOverride}),
        ...(display && {display}),
        ...(featureSettings && {featureSettings}),
        ...(lineGapOverride && {lineGapOverride}),
        ...(stretch && {stretch}),
        ...(style && {style}),
        ...(unicodeRange && {unicodeRange}),
        ...(variationSettings && {variationSettings}),
        ...(weight && {weight}),
        ...(sizeAdjust && {sizeAdjust})
    };

    return new FontFace(family, src, descriptors);
}

export { loadFonts };
