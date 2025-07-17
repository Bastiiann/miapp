let contador = 0;
const formulario = document.querySelector(".form-create");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");
    contenedor.innerHTML += ` <div class="publicacion">
            <p>id: ${contador}</p>
            <p>${descripcion}</p>
            <button id="editar" onclick="editar(this)">editar</button>
            <button id ="eliminar"onclick="eliminar(this)">eliminar</button>
            </div>`;
    ++contador;
    const eliminar = document.querySelector("#eliminar");
eliminar.addEventListener("click", (e) => {
    console.log("se presiono click en el boton eliminar");
    });
});
function editar(e){
    const parrafo = e.parentElement.querySelector("p:nth-child(2)")
    parrafo.contenteditable = true;
    e.value = "guardar";

    if (parrafo.contenteditable){
    parrafo.contenteditable = false;
    }
    if(e.value =="guardar"){
        e.value = "editar";
    }
}
function eliminar (e) {
e.parentElement.remove();
}
