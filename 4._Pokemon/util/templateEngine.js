import fs from "fs";

const navComponent = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footerComponent = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(path, options = {}) {
    const page = fs.readFileSync("./public/pages"+path).toString();

    return navComponent
        .replace("%%TAB_TITLE%%", options.tabTitle || "Pokemon")
        .replace("%%PAGE_CSS_LINK%%",
            options.cssLink || ""
        ) 
        + page
        + footerComponent;
}


/* const frontpage = fs.readFileSync("./public/pages/frontpage/index.html").toString();

const frontpagePage = navComponent
    .replace("%%TITLE%%", "pokemon frontpage")
    .replace("%%PAGE_CSS_LINK%%", '<link rel="stylesheet" href="../pages/frontpage/index.css">')
    + frontpage + footerComponent; */


/* const battle = fs.readFileSync("./public/pages/battle/battle.html").toString();
const battlePage = navComponent
    .replace("%%PAGE_CSS_LINK%%", '<link rel="stylesheet" href="../pages/battle/battle.css">')
    + battle + footerComponent;
 */
/* const contact = fs.readFileSync("./public/pages/contact/contact.html").toString();

const contactPage = navComponent
    .replace("%%TITLE%%", "contact page")
    .replace("%%PAGE_CSS_LINK%%", '<link rel="stylesheet" href="../pages/contact/contact.css">')
    + contact + footerComponent; */

