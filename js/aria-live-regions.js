// const select = document.querySelector('#bird-selector');
// const selectValue = select.options[select.selectedIndex].text;
//
// console.log(selectValue);

function updateBirdInfo() {
    // var x = document.getElementById("mySelect").value;
    const selectedValue = document.querySelector('#bird-selector').value;
    document.querySelector("#bird-info").innerHTML = "You selected: " + selectedValue;
    console.log(selectedValue);
}
