function tinh_tong() {
    //lấy dữ liệu từ trong bảng html;
    let x = document.getElementById("txtNumber1").value;// lay du lieu trong html du lieu lay ra la kieu string
    let y = document.getElementById("txtNumber2").value;
    // x = parsenInt(x) ham parsenInt chuyen doi String sang number;
    z = parseInt(x) + parseInt(y);

    document.getElementById("ketqua").value= z;
}
function tinh_hieu() {
    let x = document.getElementById("txtNumber1").value;
    let y = document.getElementById("txtNumber2").value;
    z = parseInt(x) - parseInt(y);

    document.getElementById("ketqua").value= z;
}
function multiplication() {
    let x = document.getElementById("txtNumber1").value;
    let y = document.getElementById("txtNumber2").value;
    z = parseInt(x) * parseInt(y);

    document.getElementById("ketqua").value= z;
}
function division() {
    let x = document.getElementById("txtNumber1").value;
    let y = document.getElementById("txtNumber2").value;
    z = parseInt(x) / parseInt(y);

    document.getElementById("ketqua").value= z;
}
// ham chuyen doi tien te
function convertCurrency() {
    let soTien = document.getElementById("amount").value ;
    let fromccy = document.getElementById("fromCcy");
    let fromCcyValue = fromccy.options[fromccy.selectedIndex].value;
    let toccy = document.getElementById("toCcy") ;
    let toccyValue = toccy.options[toccy.selectedIndex].value ;

     //document.getElementById("result").value = soTien*23 ;
    if (fromCcyValue == toccyValue) {
        document.getElementById("result").value = soTien;
    }
    else
        if(fromCcyValue == "vnd" ) {
            document.getElementById("result").value = (soTien / 23);
        }
        else
            document.getElementById("result").value = soTien * 23;









}

