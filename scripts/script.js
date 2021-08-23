/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function test(item) {
  document.getElementById(`dropdown_menu_${item}`).classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.top_menu_button')) {
    var dropdowns = document.getElementsByClassName('dropdown_items');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
