function  hamhienthi() {
    let a = 12
    let b = 20.5
    let c = 'hanoi'
    document.write('a='+a)
    document.write("<br>")
    document.write("b=" + b)
    document.write('<br>')
    document.write('c = '+ c)


}
function hamdieukien() {
    a = prompt('nhap vao bien a')
    b = prompt('nhap vao bien b')
    if(a>b)
    {
        alert('a lon hon b')
    }
    else
    {
        alert('a nho hon b')
    }
}
function hamchuyendoisochuoi() {
    let inputWidth
    let inputHeight
    inputHeight = prompt('nhap vao chieu cao')
    inputWidth = prompt('nhap vao chieu rong')
    let a = parseInt(inputWidth)
    let b = parseInt(inputHeight)
    let c = a * b
    alert('this is area la= ' + c);

}

function ghepchuoi() {
    a = prompt('nhap vao so a')
    b = prompt('nhap vao so b')
    c = a + b
    document.getElementById('tong').innerHTML = c
}
function switchcase_1() {
        switch(new Date().getDay(){
            case 0;
                day : "chủ nhật";
                break;
            case 1:
                day : "thứ 2";
                break;
            case 2:
                day: "thứ 3";
                break;
            case 3:
                day: "thứ 4";
                break;
            case 4:
                day: "thứ 5";
                break;
            case 5:
                day: "thứ 6";
                break;
            case 6:
                day: "thứ 7";
                break;

        }
}