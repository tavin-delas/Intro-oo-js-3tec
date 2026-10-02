const user = {
    nome: "Luiz",
    email: "luiz@luiz.com",
    nascimento: "2009/07/10",
    role: "estudantes",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Junior",
    email: "jr@m.com",
    role: "admin",
    criarCurso(){
        console.log('Curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

//user.exibirInfos()
//const exibir = user.exibirInfos
//exibir()
/*
const exibir = function(){
    console.log(this.nome)
}

const exibirNome = exibir.bind(user)
exibirNome()
exibir();
*/