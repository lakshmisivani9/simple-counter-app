let countt = 0;

function inc() {
    countt++;
    document.getElementById("count").innerText = countt;
}

function dec() {
    if (countt > 0)
        countt--;
    document.getElementById("count").innerText = countt;
}

function res() {
    countt = 0;
    document.getElementById("count").innerText = countt;
}