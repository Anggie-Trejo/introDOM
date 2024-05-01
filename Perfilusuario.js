let peliculas=[];
const numpelis=[];



function usuario()
{
    var persona = document.getElementById("nombre").value;
    //guardar y  capturar el dato qu el usuario registro 
    //inicializa variable nombre 
    //documen.getElementById guarda el dato que se coloca en el cuadro de texto
    //alert(nombreusuario);
    //para mostrar ese nombre 
    var edad=document.getElementById("años").value;
    console.log(persona +"" +edad );

    
} 
function mostrarpelis()
{
    /*let  listapelis=document.getElementById('container ');
    listapelis.innerHTML='';*/
   // document.getElementById('lista').innerHTML;
    console.log(peliculas);
    console.log(numpelis +"" +peliculas );
   //funcion que me mostraria el arreglo de pelis 
    /*for(i=0;i<numpelis;i++)
    {

    peliculas.push(peliculas);
    }*/
   
}
function tablapelis()
{
    let modeloTabla='<table>';
    modelotabla=modeloTabla+'<tr><th>persona</th> <th>edad</th>'
    peliculas.forEach(p=>
    {
        modeloTabla=modeloTabla+'<tr></tr>';
        console.log(p);//Recorre lista 
    });
    modeloTabla=modeloTabla+'</table>'
    document.getElementById('lista').innerHTML=modeloTabla;
}
//Hasta ahor solo guarda el usuaio, edad y lo va guardando en una lista 
//falta concatenar el arreglo de pelis 

