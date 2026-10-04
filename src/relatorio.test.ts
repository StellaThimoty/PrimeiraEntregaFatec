import { test, expect } from "vitest";
import { descricaoCategoria, formatarRelatorio, matrizCategoriaMes } from "./relatorio.ts";
import type { Despesa } from "./tipos.ts";

const despesasTeste:Despesa[] = [
    {
        id: 1,
        valor: 50,
        desc: "teste A",
        categoria: "Alimentação",
        mes: 1
    },
    {
        id: 2,
        valor: 200,
        desc: "teste B",
        categoria: "Moradia",
        mes: 1
    },
    {
        id: 3,
        valor: 100,
        desc: "teste C",
        categoria: "Alimentação",
        mes: 1
    },
]

test('Descricoes', () => {
    expect(descricaoCategoria(0)).toBe("Categoria não encontrada")
    expect(descricaoCategoria(1)).toBe("Alimentação")
    expect(descricaoCategoria(2)).toBe("Transporte")
    expect(descricaoCategoria(3)).toBe("Lazer")
    expect(descricaoCategoria(4)).toBe("Moradia")
    expect(descricaoCategoria(5)).toBe("Categoria não encontrada")

})

test('Matrizes', () => {
    expect(matrizCategoriaMes(despesasTeste)).toBeTypeOf("object")
    expect(matrizCategoriaMes([])).toEqual([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])
    expect(matrizCategoriaMes(despesasTeste)).toEqual([[150,0,0,200],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])
})

test('Formatação', () => {
    expect(formatarRelatorio(despesasTeste)).toBeTypeOf("string")
})