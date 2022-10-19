type Product= {
    titulo : string,
    preco : number
}

const data = [

    {titulo:'Livro Crepusculo',preco:39},
    {titulo:'Arroz São João', preco: 15},
    {titulo:'Bombril', preco:5},
    {titulo:'Salgadinho Fofura',preco:3}
]

//pegando todos os produtos do banco de dados

export const Product = {
    getAll: () => {
    
        return data
    }
}