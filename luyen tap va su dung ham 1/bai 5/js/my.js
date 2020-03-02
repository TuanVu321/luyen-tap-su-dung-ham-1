let arr1=['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let arr2 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major' ,'Leo'];
function checkStar(star) {
let a = arr1.indexOf(star);
if(a!=-1){
    alert(arr2[a]);
}else{
    alert('khong co du lieu');
}
}
function display() {
let star = prompt('hay nhap ten ngoi sao');
checkStar(star);
}
display();