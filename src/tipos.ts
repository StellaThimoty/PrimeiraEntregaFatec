export const CATEGORIAS = ["Alimentação", "Transporte", "Lazer", "Moradia"] as const

export type Despesa = {
    id: Readonly<number>,
    valor: number,
    desc: string,
    categoria: typeof CATEGORIAS[number],
    mes: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 11,
    obs?: string
}