function removeActive() {
    try {
        var element = document.getElementsByClassName("active");
        element[0].classList.remove("active");
    } catch (error) {
    }
}

function addActive(id) {
    var element = document.getElementById(id);
    removeActive()
    element.classList.toggle("active");
}


const setSliderValue = (id, outputId) => {
    const slider = document.getElementById(id);
    const output = document.getElementById(outputId);
    if (id === "empRange")
        output.innerHTML = slider.value + "%";
    else
        output.innerHTML = slider.value;
}