import React, { useState } from "react";

export const Content = () => {

  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Gorra Acceno Negro Clemont",
      categoria: "Gorra",
      precio: 300000,
      stock: 1,
      imagen: "/react12/images/gorra.jpg",
    },
    {
      id: 2,
      nombre: "Camiseta Masculina Torrente Negro Clemont",
      categoria: "Camisetas",
      precio: 390000,
      stock:69,
      imagen: "/react12/images/Camiseta.jpg",
    },
  ]);

  const [form, setForm] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    stock: "",
    imagen: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const agregarProducto = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.precio || !form.stock) return;

    const nuevoProducto = {
      id: Date.now(),
      nombre: form.nombre,
      categoria: form.categoria || "General",
      precio: Number(form.precio),
      stock: Number(form.stock),
      imagen: form.imagen || "https://via.placeholder.com/300x200?text=Producto",
    };

    setProductos([...productos, nuevoProducto]);

    setForm({
      nombre: "",
      categoria: "",
      precio: "",
      stock: "",
      imagen: "",
    });
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  return (
    <div className="container-fluid mt-5 mb-5 px-5">
      <div className="row">

       
        <div className="col-md-8">
          <h3 className="mb-4">Productos</h3>

          <div className="row">
            {productos.map((producto) => (
              <div className="col-md-6 mb-4" key={producto.id}>
                <div className="card shadow-sm h-100">

                  
                  <img
                    src={producto.imagen}
                    className="card-img-top"
                    alt={producto.nombre}
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5>{producto.nombre}</h5>

                      {producto.stock > 5 ? (
                        <span className="badge bg-success">En stock</span>
                      ) : (
                        <span className="badge bg-warning text-dark">
                          Pocas unidades
                        </span>
                      )}
                    </div>

                    <p className="text-muted">
                      Categoría: {producto.categoria}
                    </p>

                    <h6 className="fw-bold">
                      COP ${producto.precio.toLocaleString()}
                    </h6>
                  </div>

                  <div className="card-footer bg-white">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      Eliminar
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

       
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              Agregar producto
            </div>

            <div className="card-body">
              <form onSubmit={agregarProducto}>

                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    value={form.nombre}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Categoría</label>
                  <input
                    type="text"
                    name="categoria"
                    className="form-control"
                    value={form.categoria}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Precio (COP)</label>
                  <input
                    type="number"
                    name="precio"
                    className="form-control"
                    value={form.precio}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Stock</label>
                  <input
                    type="number"
                    name="stock"
                    className="form-control"
                    value={form.stock}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">URL Imagen</label>
                  <input
                    type="text"
                    name="imagen"
                    className="form-control"
                    value={form.imagen}
                    onChange={handleChange}
                    placeholder="https://..."
                  />
                </div>

                <button className="btn btn-success w-100">
                  Guardar producto
                </button>

              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};