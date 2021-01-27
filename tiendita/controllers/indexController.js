var app = angular.module("tiendita", [])
.controller('controllerTiendita', ["$scope", function(m){

    m.carrito = false;
    m.mostrar = false;
    m.total = 0;

    m.num = 0;
    m.nuevoArticulo = {};
    m.articulos = [
        {
            "num": "",
            "producto": "",
            "precioUnitario": "",
            "cantidad": "",
            "importe": "",
        }
    ];
    m.fPago = [];
    var formas = [
        {
            forma: 'Efectivo'
        },
        {
            forma: 'Tarjeta'
        }
    ];
    angular.forEach(formas, function (value, key) { 
        m.fPago.push(value.forma); 
    }); 

    m.setArticulo = function () {
        m.carrito = true;
        m.nuevoArticulo.num = m.num + 1;
        m.nuevoArticulo.importe = m.nuevoArticulo.precioUnitario * m.nuevoArticulo.cantidad;
        m.articulos.push(m.nuevoArticulo);
        m.total = m.total + m.nuevoArticulo.importe;
        m.num = m.nuevoArticulo.num;
        m.nuevoArticulo = {};
        m.nuevoArticulo.num = m.num;
    };

    m.nuevoPago = {};
    m.pagos = [
        {
            "num": "",
            "formaPago": "",
            "importe": "",
            "comision": "",
            "total": "",
        }
    ];
    m.numP = 0;
    m.setPago = function () {
        m.nuevoPago.num = m.numP + 1;
        if (m.nuevoPago.formaPago == "Tarjeta") {
            m.nuevoPago.comision = m.nuevoPago.importe * 0.1;
        }
        else {
            m.nuevoPago.comision = 0;
        }
        m.nuevoPago.total = parseFloat(m.nuevoPago.importe) + parseFloat(m.nuevoPago.comision);
        m.pagos.push(m.nuevoPago);
        m.total = m.total - m.nuevoPago.importe;
        m.numP = m.nuevoPago.num;
        m.nuevoPago = {};
        m.nuevoPago.num = m.numP;

        if (m.total == 0) {
            m.articulos = [
                {
                    "num": "",
                    "producto": "",
                    "precioUnitario": "",
                    "cantidad": "",
                    "importe": "",
                }
            ];
        }
    };

    m.mostrarPagos = function () {
        m.mostrar = !m.mostrar;
    }
    
    m.copy = function (data) {
        alert("Copiado al portapapeles: "+data);
    }

    m.check = false;
}]);