const cargaIndumentaria = async () => {
  try {
    const response = await fetch(
      `https://argprog4-default-rtdb.firebaseio.com/.json`
    );

    if (response.status === 200) {
      const datos = await response.json();
      console.log(datos);

      let productos = "";
      datos.forEach((prod) => {
        if (prod.tipo === "Indumentaria") {
          productos += `
                <div class="card">
                    <div class="foto">
                        <img src="${prod.img}" class="card-img" alt="tornado">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <h6 class="card-title">$${prod.precio}</h6>
                        <p class="card-text">Tipo: ${prod.tipo}</p>
                        <a href="#" class="btn btn-primary">Comprar!</a>
                    </div>       
                </div>   
                `;
        }
      });

      document.getElementById("cards").innerHTML = productos;
    } else {
      console.log("Hubo un error al obtener los datos.");
    }
  } catch (error) {
    console.log(error);
  }
};

cargaIndumentaria();
