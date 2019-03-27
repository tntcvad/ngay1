function tinh_tong() {
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    document.getElementById("ketqua").value=(x + y);
}
function tinh_hieu() {
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    document.getElementById("ketqua").value=(x - y);
}
function multiplication() {
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    document.getElementById("ketqua").value=(x*y);
    
}
function division() {
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    document.getElementById("ketqua").value=(x/y);
}