var box_contact = document.querySelector('#app > div > div > div.drawer-manager > span.pane.pane-one > div > span > div > div.drawer-body');

function Contacts() {
    return document.querySelectorAll('#app > div > div > div.drawer-manager > span.pane.pane-one > div > span > div > div.drawer-body > div:nth-child(2) > div > div > div > div > div > div.chat-body > div.chat-main > div > span')
}
var contacts = Contacts().length;
var before = contacts.length;
var scroll = setInterval(function() {
    box_contact.scrollTop += 100;
    if (before != Contacts().length) {
        before = Contacts().length
    }
}, 200);
var up = setTimeout(function() {
    if (before == Contacts().length) {
        clearInterval(scroll)
    }
}, 20 * 1000);