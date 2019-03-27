function tinh_tong() {
    //lấy dữ liệu từ trong bảng html;
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    z = parseInt(x) + parseInt(y);

    document.getElementById("ketqua").value= z;
}
function tinh_hieu() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    z = parseInt(x) - parseInt(y);

    document.getElementById("ketqua").value= z;
}
function multiplication() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    z = parseInt(x) * parseInt(y);

    document.getElementById("ketqua").value= z;
}
function division() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    z = parseInt(x) / parseInt(y);

    document.getElementById("ketqua").value= z;
}