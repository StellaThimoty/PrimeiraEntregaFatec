import type { Despesa } from "./tipos.js";

export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
    try {
        if(nova. valor <= 0)
            throw new Error("Valor tem que ser maior que 0");
        if(nova.mes > 12 || nova.mes < 1)
            throw new Error("Mes tem que ser entre 1 e 12")
        const novaLista = [...despesas, nova]
        return novaLista
    } catch (error) {
        console.error(error)
        return despesas
    }
}

export function removerDespesa(despesas: Despesa[], id:number): Despesa[] {
    return despesas.filter((despesa) => despesa.id !== id)
    // Cria um array novo que todos os items tem id diferente ao id fornecido
    // Ou seja, remove o id especificado pela função do array... 
    // Se o ID não existir, retorna um array igual porque tudo correspondeu ao filtro
}

export function despesasDaCategoria(despesas: Despesa[], categoria: Despesa["categoria"]): Despesa[] {
    return despesas.filter((despesa) => despesa.categoria == categoria)
    // Mesma coisa que acima, mas filtrando
}

export function totalGasto(despesas: Despesa[]) : number {
    let total = 0
    despesas.forEach(despesa => {
        total += despesa.valor
    });
    // Soma todos os valores de cada despesa
    return total
}

export function maiorDespesa(despesas: Despesa[]): Despesa | undefined {
    if (despesas.length === 0)
        return undefined
    return despesas.reduce((despesa,despesaAtual) => (despesa.valor > despesaAtual.valor) ? despesa : despesaAtual)
    // Aplica a função comparativa entre o valor da despesa anterior e o valor da despesa atual, iterando por todos os items do array
    // não trata despesas duplicatas
    // Eu queria passar undefined diretamente na função mas o reduce não gostava disso, então fazer o que né
}