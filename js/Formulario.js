const Nombre = document.getElementById('txtNombre');
const Apellido = document.getElementById('txtApellido');
const Email = document.getElementById('txtEmail');
const Telefono = document.getElementById('txtTelefono');
const Comentarios = document.getElementById('txtComentario');
const contenedor = document.querySelector('.AgregarComentario');
const Formulario = document.getElementById('Enviar');
const error = document.querySelector('.error'),
    sinError = document.querySelector('.sinError');
Formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    MuestraAlerta();
})
function MuestraAlerta(){
    const elemento = document.createElement('p');
    elemento.classList.add('Error');
    if(Nombre.value === '' && Apellido.value === '' && Email.value === '' && Telefono.value === '' && Comentarios.value === ''){
        elemento.textContent = "Complete todos los campos";
        contenedor.appendChild(elemento);
    }else if(Nombre.value === ''){
        elemento.textContent = 'Ingrese su nombre';
        contenedor.appendChild(elemento);
    }else if(Apellido.value === ''){
        elemento.textContent = 'Ingrese su apellido';
        contenedor.appendChild(elemento);
    }else if(Telefono.value === ''){
        elemento.textContent = 'Ingrese su telefono';
        contenedor.appendChild(elemento);
    }else if(Email.value === ''){
        elemento.textContent = 'Ingrese su correo';
        contenedor.appendChild(elemento);
    }else if(Comentarios.value === ''){
        elemento.textContent = 'Ingrese la razon de la solicitud';
        contenedor.appendChild(elemento);
    }else{
        elemento.classList.remove('Error');
        elemento.classList.add('Correcto');
        elemento.textContent = 'Su solicitud ha sido enviada';
        contenedor.appendChild(elemento);
        Nombre.value = '';
        Apellido.value = '';
        Telefono.value = '';
        Email.value = '';
        Comentarios.value = '';

    }
    setTimeout(()=>{
        elemento.remove();
    },3000);
}
