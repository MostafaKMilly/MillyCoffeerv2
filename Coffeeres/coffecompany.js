function SearchItems() {
    key = document.getElementById('searchbox').value.toUpperCase();
    parentelements = document.getElementById('items');
    Arrayofitems = parentelements.getElementsByTagName('div');
    for (i = 0; i < Arrayofitems.length; i++) {
        par = Arrayofitems[i].getElementsByTagName('h5')[0];
        text = par.textContent || par.innerHTML;
        if (text.toUpperCase().indexOf(key) > -1)
            Arrayofitems[i].style.display = "inline-block";
        else {
            Arrayofitems[i].style.display = "none";
        }
    }
}