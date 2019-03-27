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
    let a = 'hanoi'
    let b = 'ngay'
    document.getElementById("ghep").innerHTML = a + "" + b


}
function ghepchuoi() {
    a = prompt('nhap vao so a')
    b = prompt('nhap vao so b')
    let c = a + b
    document.getElementById('tong').innerHTML = c
    document.
}