import { adicionarDespesa, removerDespesa, despesasDaCategoria, totalGasto, maiorDespesa } from "./despesas.ts";
import type { Despesa } from "./tipos.ts";

const despesas:Despesa[] = [
    {
        id: 1,
        valor: 10,
        desc: "restaurante c",
        categoria: "Alimentação",
        mes: 1,
        obs: "pinto"
    },
    {
        id: 2,
        valor: 20,
        desc: "restaurante a",
        categoria: "Alimentação",
        mes: 1,
        obs: "cu"
    },
    {
        id: 3,
        valor: 15,
        desc: "cartas",
        categoria: "Lazer",
        mes: 1,
        obs: "bosta"
    },
        {
        id: 4,
        valor: 40,
        desc: "jogos",
        categoria: "Lazer",
        mes: 2,
        obs: "mijo"
    },
]


console.log(totalGasto(despesas))
console.log(maiorDespesa(despesas))