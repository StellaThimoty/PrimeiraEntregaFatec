import { test, expect } from "vitest";
import { adicionarDespesa, removerDespesa, despesasDaCategoria, totalGasto, maiorDespesa } from "./despesas.ts";
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

test('Adicionar Despesas', () => {
    const TesteA:Despesa = {id: 1, valor: 10, desc: "teste D", categoria: "Transporte", mes: 1}
    const TesteB:Despesa = {id: 4, valor: 10, desc: "teste D", categoria: "Transporte", mes: 1}
    const TesteC:Despesa = {id: 4, valor: 0, desc: "teste D", categoria: "Transporte", mes: 1}


    expect(adicionarDespesa(despesasTeste, TesteB)).toEqual([{ id: 1, valor: 50, desc: "teste A", categoria: "Alimentação", mes: 1}, {id: 2, valor: 200, desc: "teste B", categoria: "Moradia", mes: 1}, {id: 3, valor: 100, desc: "teste C", categoria: "Alimentação", mes: 1}, {id: 4, valor: 10, desc: "teste D", categoria: "Transporte", mes: 1}])
    expect(() => adicionarDespesa(despesasTeste, TesteA)).toThrow("Id existente")
    expect(() => adicionarDespesa(despesasTeste, TesteC)).toThrow("Valor tem que ser maior que 0")
})

test('Remover Despesas', () => {
    expect(removerDespesa(despesasTeste, 4)).toEqual(despesasTeste)
    expect(removerDespesa(despesasTeste, 2)).toEqual([{id: 1, valor: 50, desc: "teste A", categoria: "Alimentação", mes: 1}, {id: 3, valor: 100, desc: "teste C", categoria: "Alimentação", mes: 1}])
})

test('Despesas da categoria', () => {
    expect(despesasDaCategoria(despesasTeste, "Lazer")).toEqual([])
    expect(despesasDaCategoria(despesasTeste, "Moradia")).toEqual([{id: 2, valor: 200, desc: "teste B", categoria: "Moradia", mes: 1}])
    expect(despesasDaCategoria(despesasTeste, "Alimentação")).toEqual([{id: 1, valor: 50, desc: "teste A", categoria: "Alimentação", mes: 1}, {id: 3, valor: 100, desc: "teste C", categoria: "Alimentação", mes: 1}])
})

test('Total gasto', () => {
    expect(totalGasto([])).toBeTypeOf("number")
    expect(totalGasto([])).toBe(0)
    expect(totalGasto(despesasTeste)).toBeTypeOf("number")
    expect(totalGasto(despesasTeste)).toBe(350)
})

test('Maior despesa', () => {
    expect(maiorDespesa([])?.valor).toBeTypeOf("undefined")
    expect(maiorDespesa(despesasTeste)?.valor).toBeTypeOf("number")
    expect(maiorDespesa(despesasTeste)?.valor).toBe(200)
    expect(maiorDespesa(despesasTeste)).toEqual({id: 2, valor: 200, desc: "teste B", categoria: "Moradia", mes: 1})
})
