function getNum(num){
    var res = document.getElementById('result')   // getting the input
    console.log(num)
    res.value += num;   
}
function clr(){
    var res = document.getElementById('result')   // getting the input
    res.value = "" ;
    console(res.value)

}
function getRes(){
    var res = document.getElementById('result')   // getting the input
    res.value = eval(res.value)

}