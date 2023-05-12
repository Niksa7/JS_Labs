let cls = document.getElementsByClassName('hide-show')
for (let i=0; i < cls.length; i++){
    cls[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.display === "none"){
            content.style.display = "block";
        }
        else {
            content.style.display = "none";
        }
    })
}
