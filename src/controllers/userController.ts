import {Request, Response} from 'express'

export const login = ((req:Request,res:Response) =>{

    res.render('pages/login',{
        name:'Fulano',
        lastName:'Fulaninho',
        showWelcome:false
    })

})

export const idade = ((req:Request, res:Response) =>{
    res.render('pages/idade')
})

export const idadeResultado = ((req:Request, res:Response) =>{
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

export const nome = ((req:Request, res:Response) =>{
    let nome: string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })
})

