function myFunction(x) {
    x.classList.toggle("change");

    let myMenu = document.getElementById('js-menu');
    //let navbar = document.getElementById('nav-try');
    if(myMenu.className === 'work-bar-de'){
        myMenu.className += ' menu-active'
        //navbar.className += ' nav-active'
    } else {
        myMenu.className = 'work-bar-de';
        //navbar.className ='nav-try';
    }
  }

function search() {
    var text=document.getElementById("search").value;
    var cleanQuery = text.replace(" ","+",text);
    var url='http://www.google.com/search?q='+cleanQuery;

    window.location.href=url;
}