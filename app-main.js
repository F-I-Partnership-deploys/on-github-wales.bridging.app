// Javascript for index.html (HTML SPA) invoked after First Contentful Paint / onPageLoad() / onHover/interaction

// change Name to link
function namesToLinks() {
    let table, tr, i;
    table = document.getElementById("iDT");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
                  
        var makeLink = table.rows[i].cells[1].innerHTML;
        var makeLink2 = table.rows[i].cells[0].innerHTML;
        var web = makeLink.link(table.rows[i].cells[1].innerHTML);
        var web2 = makeLink2.link(table.rows[i].cells[1].innerHTML);
        table.rows[i].cells[0].innerHTML = web2;
        table.rows[i].cells[1].innerHTML = web;
        }

    }


function pLF() {
cl("Page Loaded");
cl("Making names Links...");
namesToLinks();
cl("Done with links");
}
