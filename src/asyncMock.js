const productos = [
    {
        id: "1",
        nombre: "RTX 2080",
        precio: 500000,
        categoria: "hardware",
        img: "https://static.gigabyte.com/StaticFile/Image/Global/857fc6b4d9141740c3d9d5cd409903eb/Product/23201",
        stock: 30,
        descripcion: "Placa de video Nvidia RTX 2080"
    },
    {
        id: "2",
        nombre: "Ryzen 5 5500",
        precio: 150000,
        categoria: "hardware",
        img: "https://logg.api.cygnus.market/static/logg/Global/Procesador%20AMD%20Ryzen%205%205600G%204.4GHz%2016MB%20Zen3%20Gr%C3%A1ficos%20Radeon%207%20AM4%20c/%20Cooler/8ec3df596c28410198f616ee9d28a83d.webp",
        stock: 15,
        descripcion: "Micro procesador AMD"
    },
    {
        id: "3",
        nombre: "Monitor Zowie",
        precio: 250000,
        categoria: "periférico",
        img: "https://image.benq.com/is/image/benqco/03-xl2731k-xl-black-front-left-45?$ResponsivePreset$&fmt=png-alpha",
        stock: 20,
        descripcion: "Monitor BENQ Zowie 240hz"
    }
]

export const getProductos = ()=>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productos)
        },500)
    })
}

export const getProductosById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos.find(producto => producto.id === producto.id))
        },500)
    })
}


export default productos