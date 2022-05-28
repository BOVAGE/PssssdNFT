const accordion = document.querySelectorAll('.accordion');

accordion.forEach((element) => {
    element.addEventListener('click', function () {
        let panel = this.firstElementChild;
        let answer = panel.nextElementSibling;
        let buttonIcon = panel.firstElementChild.firstElementChild
        console.log(buttonIcon);

        
        let arrayOfAccordion = Array.from(document.querySelectorAll('.accordion'));
        // stores the open accordion so as to close later
        let active = arrayOfAccordion.filter((value) => {
            return value.classList.contains('active');
        });

        if (answer.style.display === "block"){
            answer.style.display = "none";
            buttonIcon.src = 'asset/caret-right.svg';
            this.classList.remove('active');
        } else {
            answer.style.display = "block";
            buttonIcon.src = 'asset/caret-down.svg';
            this.classList.toggle('active');
        }

        console.log(active);
        closeActiveAccordion(active);
    });
});

function closeActiveAccordion(activeList){
    activeList.forEach((element) => {
        element.classList.remove('active');
        element.lastElementChild.style.display = "none";
        element.firstElementChild.firstElementChild.firstElementChild.src = 'asset/caret-right.svg';
    });
}