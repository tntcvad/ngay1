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
