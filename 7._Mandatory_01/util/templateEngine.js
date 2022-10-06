import fs from "fs";

const header = fs.readFileSync("./public/components/header/header.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(path, options) {
    const page = fs.readFileSync("./public/pages/" + path);

    return header
    .replace("%%TAB_TITLE%%", options.tabTitle || "Page")
    .replace("%%CSS_LINK%%", options.cssLink || "") 
    + page 
    + footer;



}





