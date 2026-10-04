import { type Despesa, CATEGORIAS } from "./tipos.ts";
import { totalGasto, maiorDespesa } from "./despesas.ts";
import { readlink } from "node:fs";

export function descricaoCategoria(categoria: number): string {
    switch (categoria) {
        case 1:
            return CATEGORIAS[0]
        case 2:
            return CATEGORIAS[1]
        case 3:
            return CATEGORIAS[2]
        case 4:
            return CATEGORIAS[3]
        default:
            return "Categoria não encontrada"
    }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
    let totalGasto:number[][] = []
    for (let mes = 1; mes <= 12; mes++) {
        let somaAlim = 0
        let somaTrans = 0
        let somaLazer = 0
        let somaMoradia = 0
        for (let index = 0; index < despesas.length; index++) {
            const despesa = despesas[index];
                if (mes === despesa?.mes) {
                    if(despesa.categoria === "Alimentação")
                        somaAlim += despesa.valor
                    if(despesa.categoria === "Transporte")
                        somaTrans += despesa.valor
                    if(despesa.categoria === "Lazer")
                        somaLazer += despesa.valor
                    if(despesa.categoria === "Moradia")
                        somaMoradia += despesa.valor
                }
            }
        const totalMes = [somaAlim, somaTrans, somaLazer, somaMoradia]
        totalGasto.push(totalMes)
        }
    return totalGasto
}

export function formatarRelatorio(despesas: Despesa[]): string {
    let relatorio = "RELATÓRIO ANUAL DE GASTOS\n"
    const totalAno = matrizCategoriaMes(despesas)
    const maiorGasto = maiorDespesa(despesas)
    const totalDespesas = totalGasto(despesas)
    let alim = []
    let trans = []
    let lazer = []
    let moradia = []
    for (let i = 0; i < totalAno.length; i++) {
        let somaAlim = 0;
        let somaTrans = 0
        let somaLazer = 0
        let somaMoradia = 0
        if (totalAno[i] !== undefined) {
            for (let j = 0; j < totalAno[i].length; j++) {
                if (totalAno[i][j] !== undefined) {
                    if(j === 0)
                        somaAlim += totalAno[i][j]
                    if(j === 1)
                        somaTrans += totalAno[i][j]
                    if(j === 2)
                        somaLazer += totalAno[i][j]
                    if(j === 3)
                        somaMoradia += totalAno[i][j]
                }
            }
        }
        alim.push(somaAlim)
        trans.push(somaTrans)
        lazer.push(somaLazer)
        moradia.push(somaMoradia)
    }
    const anoAlim = alim.reduce((a,b) => a+b)
    const anoTrans = trans.reduce((a,b) => a+b)
    const anoLazer = lazer.reduce((a,b) => a+b)
    const anoMoradia = moradia.reduce((a,b) => a+b)
    relatorio+=`-`.repeat(21)
    relatorio+="\n| ALIMENTAÇÃO: ".padEnd(20-anoAlim.toString().length)
    relatorio+=`${anoAlim} |\n`
    relatorio+=`-`.repeat(21)
    relatorio+=`\n| TRANSPORTE: `.padEnd(20-anoTrans.toString().length)
    relatorio+=`${anoTrans} |\n`
    relatorio+=`-`.repeat(21)
    relatorio+=`\n| LAZER: `.padEnd(20-anoLazer.toString().length)
    relatorio+=`${anoLazer} |\n`
    relatorio+=`-`.repeat(21)
    relatorio+=`\n| MORADIA: `.padEnd(20-anoMoradia.toString().length)
    relatorio+=`${anoMoradia} |\n`
    relatorio+=`-`.repeat(21)
    relatorio+=`\n| MAIOR GASTO: `.padEnd(20-maiorGasto.valor.toString().length)
    relatorio+=`${maiorGasto.valor} |\n`
    relatorio+=`-`.repeat(21)
    relatorio+=`\n| TOTAL: `.padEnd(20-totalDespesas.toString().length)
    relatorio+=`${totalDespesas} |\n`
    relatorio+=`-`.repeat(21)
    relatorio.toUpperCase()

    return relatorio
}
