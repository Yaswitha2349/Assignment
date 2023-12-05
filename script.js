let isBackgroundChanged = false;

function changeBackground() {
    const body = document.body;
    
    if (isBackgroundChanged) {
        body.style.backgroundColor = "#f0f0f0";
    } else {
        body.style.backgroundColor = "#3498db";
    }

    isBackgroundChanged = !isBackgroundChanged;
}
