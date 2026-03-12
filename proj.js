const baseFare = 30;{

    function regularFare() {
    let fareDisplay = document.getElementById("baseFare");
    fareDisplay.innerText = "₱ " + baseFare.toFixed(2);
}

    function discountFare() {
    let fareDisplay = document.getElementById("baseFare");
    let discountedFare = baseFare * 0.8; // 20% discount
    fareDisplay.innerText = "₱ " + discountedFare.toFixed(2);
}
}