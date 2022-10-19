import { Router, Request, Response } from "express"

const router = Router()

router.get('/',(req:Request,res:Response) =>{

   let user:string = 'USE104'

    res.render('pages/home',{
       user,
       produtos:[
        {titulo:'Livro Crepusculo',preco:39},
        {titulo:'Arroz São João', preco: 15},
        {titulo:'Bombril', preco:5},
        {titulo:'Salgadinho Fofura',preco:3}
       ],frases:[
        'A guerra contra as drogas é inutil pois acaba morrendo os dois lados',
        'A Vingança é plena mata alma e envenena',
        'Prefiro morrer do que perder a vida',
        'A vida passa mais rápido do que uma Ferrari na estrada'
       ]

    })
})

router.get('/login',(req:Request,res:Response) =>{
    res.render('pages/login',{
        name:'Fulano',
        lastName:'Fulaninho',
        showWelcome:false
    })
})

router.get('/idade',(req:Request,res:Response) =>{
   res.render('pages/idade')
})

router.post('/idade',(req:Request,res:Response) =>{
    let mostrarIdade: boolean = false
    let idade: number = 0

    if(req.body.anoNascimento){
        let anoNascimento:number = parseInt(req.body.anoNascimento as string)

        let anoAtual: number = new Date().getFullYear()

        idade = anoAtual - anoNascimento

        mostrarIdade = true
    }

    res.render('pages/idade',{
        mostrarIdade,
        idade
    })
})





router.get('/nome',(req:Request, res:Response) =>{

    let nome: string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })
})


export default router