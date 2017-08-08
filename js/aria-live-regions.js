// const select = document.querySelector('#bird-selector');
// const selectValue = select.options[select.selectedIndex].text;
//
// console.log(selectValue);

function updateBirdInfo() {

    const selectedValue = document.querySelector('#bird-selector').value;

    switch (selectedValue) {
        case 'hawk':
            birdInfo = "Some information about the hawk";
            break;
        case 'owl':
            birdInfo = "Some information about the owl";
            break;
        case 'sparrow':
            birdInfo = "Some information about the sparrow";
            break;
        case 'tui':
            birdInfo = "Some information about the tui";
            break;
        default:
            birdInfo = "Some information about the Eagle";
    }
    // var x = document.getElementById("mySelect").value;

    // document.querySelector("#bird-info").innerHTML = "You selected: " + selectedValue;
    document.querySelector("#bird-info").innerHTML = birdInfo;
    console.log(selectedValue);


}


