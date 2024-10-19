function getElementWidth(content, padding, border) {

content = parseInt(content.replace("px", ""));
padding = parseInt(padding.replace("px", ""));
border = parseInt(border.replace("px", ""));

    let width = content + (padding*2) + (border*2);

    return width;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));