

function pizzaOven(tipoCorteza,tipoSalsa,quesos,salsas){
    var pizza={};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;

    return pizza;
}

var p1 = pizzaOven("estilo Chicago","tradicional",["mozzarella"],["pepperoni","salchicha"]);
var p2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"] y ["champiñones", "aceitunas", "cebollas"]);