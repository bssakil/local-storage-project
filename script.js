const fontSize = document.getElementById("fontSize");
const bgColor = document.getElementById("bgColor");
const resetBtn = document.getElementById("resetBtn");
const mainElement = document.querySelector("main");

// Set values
const setValues = (fontSizeValue, bgColorValue) => {
    fontSize.value = fontSizeValue;
    bgColor.value = bgColorValue;

    mainElement.style.fontSize = fontSizeValue;
    mainElement.style.backgroundColor = bgColorValue;
};

// Load Local Storage Value
const initialSetup = () => {
    const fontSizeOne = localStorage.getItem("fontSize");
    const bgColorOne = localStorage.getItem("bgColor");

    // দুইটিই Local Storage-এ থাকলে
    if (fontSizeOne && bgColorOne) {
        setValues(fontSizeOne, bgColorOne);
    }

    // কোনোটিই না থাকলে
    else if (!fontSizeOne && !bgColorOne) {
        setValues("16px", "red");
    }

    // শুধু Background Color থাকলে
    else if (!fontSizeOne && bgColorOne) {
        setValues("16px", bgColorOne);
    }

    // শুধু Font Size থাকলে
    else if (fontSizeOne && !bgColorOne) {
        setValues(fontSizeOne, "red");
    }
};

// Change Font Size
const changeFontSize = (event) => {
    const selectedFontSize = event.target.value;

    mainElement.style.fontSize = selectedFontSize;

    localStorage.setItem("fontSize", selectedFontSize);
};

// Change Background Color
const changeBgColor = (event) => {
    const selectedBgColor = event.target.value;

    mainElement.style.backgroundColor = selectedBgColor;

    localStorage.setItem("bgColor", selectedBgColor);
};

// Clear Local Storage
const clearLocalStorage = () => {
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");

    setValues("16px", "red");
};

// Font Size Change Event Listener
fontSize.addEventListener("change", changeFontSize);

// Background Color Change Event Listener
bgColor.addEventListener("change", changeBgColor);

// Reset Button
resetBtn.addEventListener("click", clearLocalStorage);

// Initial Setup
initialSetup();