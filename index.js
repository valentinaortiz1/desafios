const boton= document.getElementById('click');
boton.addEventListener('click',Hacerclick);
function Hacerclick(){
    let aa= document.getElementById('numero1').value;
    let bb= document.getElementById('numero2').value;
    console.log("holis");
    let producto= parseInt(aa) + parseInt(bb);
    document.getElementById('resultado-suma').innerHTML=producto;s

}