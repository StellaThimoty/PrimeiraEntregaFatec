import { adicionarDespesa, removerDespesa, despesasDaCategoria, totalGasto, maiorDespesa } from "./despesas.ts";
import { formatarRelatorio, matrizCategoriaMes } from "./relatorio.ts";
import type { Despesa } from "./tipos.ts";

export const ListaDespesas:Despesa[] = [
    {
        id: 1,
        valor: 100,
        desc: "restaurante c",
        categoria: "Alimentação",
        mes: 1,
        obs: "comida"
    },
    {
        id: 2,
        valor: 200,
        desc: "condomínio",
        categoria: "Moradia",
        mes: 1
    },
    {
        id: 3,
        valor: 45,
        desc: "cartas",
        categoria: "Lazer",
        mes: 1,
    },
    {
        id: 4,
        valor: 40,
        desc: "jogos",
        categoria: "Lazer",
        mes: 2,
        obs: "pq vc compra jogos se vc joga a mesma coisa faz 8 anos"
    },
    {
        id: 5,
        valor: 200,
        desc: "condomínio",
        categoria: "Moradia",
        mes: 2
    },
    {
        id: 6,
        valor: 60,
        desc: "restaurante a",
        categoria: "Alimentação",
        mes: 2
    },
    {
        id: 7,
        valor: 150,
        desc: "cartas",
        categoria: "Lazer",
        mes: 3,
        obs: "deck pimpado"
    },
    {
        id: 8,
        valor: 200,
        desc: "condomínio",
        categoria: "Moradia",
        mes: 3
    },
    {
        id: 9,
        valor: 15,
        desc: "uber",
        categoria: "Transporte",
        mes: 3,
    },
    {
        id: 10,
        valor: 350,
        desc: "restaurante b",
        categoria: "Alimentação",
        mes: 4,
        obs: "Aniversário"
    },
    {
        id: 11,
        valor: 200,
        desc: "condomínio",
        categoria: "Moradia",
        mes: 4
    }    
]

const novaDespesa:Despesa =     {
        id: 12,
        valor: 500,
        desc: "cartas",
        categoria: "Lazer",
        mes: 4,
        obs: "Aniversário"
    }
 
const listanova = adicionarDespesa(ListaDespesas, novaDespesa)
const listadnv = removerDespesa(listanova, 7)

console.log(formatarRelatorio(listadnv))
