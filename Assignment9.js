wordItems = document.getElementsByTagName('strong');
for (var i = 0; i < wordItems.length; i++) {
    wordItems[i].onmouseover = function () {
    this.style.color = "red";
    };
}
