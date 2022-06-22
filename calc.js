

function output()
{
let x = document.getElementById("edu").value
let y = eval(x)
document.getElementById("edu").value = y
}


function clr()
{
document.getElementById("edu").value = ""
}

function display(val)
{
document.getElementById("edu").value+=val
 }
