
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

document.getElementById('darkmode').addEventListener("click", katt);

function katt()
{
    var gomb=document.getElementById('darkmode');
    document.body.classList.toggle('dark-mode');
    if (gomb.textContent=="Dark mode") {gomb.textContent = "Light mode";
gomb.style.backgroundColor='wheat'
gomb.style.color='rgb(51, 51, 51)'}
    else {gomb.textContent = "Dark mode"
    gomb.style.backgroundColor= 'rgb(51, 51, 51)'
    gomb.style.color='wheat'}
    ;
    
}

document.getElementById('url').addEventListener('change', url);
document.getElementById('szel').addEventListener('input', szel);
document.getElementById('vas').addEventListener('input', border);
document.getElementById('szin').addEventListener('input', border);
function url()
{
    document.getElementById('kep').src = document.getElementById('url').value;
}

function szel(){
document.getElementById('kep').width = document.getElementById('szel').value;
}



function border(){
    document.getElementById('kep').style.border = document.getElementById('vas').value + "px solid " + document.getElementById('szin').value;
}