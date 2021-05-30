const buttons = document.querySelectorAll(".menu_item,.nav-link,#contact_icon,.menu_link");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        var contenu_name = e.currentTarget.dataset.contenu;
        document.getElementById(contenu_name).classList.add('apparition_fondue')
        var elements = document.getElementsByClassName("contenu");
        for (let j = 0; j < elements.length; j++) {
            elements[j].style.display = "none";
        }
        document.getElementById(contenu_name).style.display = "block";
        setTimeout(function () {
            document.getElementById(contenu_name).classList.remove('apparition_fondue');
          }, 0);
    });
}
