import { faker } from "@faker-js/faker";
import dbPostgres from "./config/db.js";

async function autor(){

    for(let i = 0; i < 100; i++){
        const id = i;
        const nome = faker.person.fullName();
        const dataNascimento = faker.date.past().toLocaleDateString('pt-BR');
        const pais = faker.location.country();
        const nota = faker.lorem.text();

        const autor = {
            id,
            nome,
            dataNascimento,
            pais,
            nota
        };

        await dbPostgres.query("INSERT\
                             INTO autor (ID, nome, data_nascimento, pais_nascimento, nota_biografica)\
                             VALUES ($1, $2, $3, $4, $5)", 
                             [id, nome, dataNascimento, pais, nota])

        console.log(autor)
    }

}

async function autorlivro() {
    const quantidadeAutorLivro = 500; // Defina a quantidade de registros que deseja inserir

    for (let i = 0; i < quantidadeAutorLivro; i++) {
        const cod_autor = faker.number.int({ min: 0, max: 99 }); // ID de autor aleatório de 0 a 99
        const cod_livro = faker.number.int({ min: 1001, max: 1400 }); // Código de livro aleatório de 1001 a 1400

        await dbPostgres.query("INSERT INTO autor_livro (cod_autor, cod_livro) VALUES ($1, $2)", [cod_autor, cod_livro]);

        console.log(`Autor_Livro - Cod_Autor: ${cod_autor}, Cod_Livro: ${cod_livro}`);
    }
}

async function livro(){

    for(let i = 0; i < 400; i++){
        const codigo = i + 1001;
        const nome = faker.lorem.words();
        const idioma = ['Portugues', 'Espanhol', 'Ingles', 'Alemão', 'Frances', 'Japones', 'Tailandes', 'Coreano']
        const indice = Math.floor(Math.random() * idioma.length)
        const lingua = idioma[indice]
        const ano = faker.number.int({min:1800, max:2024})

        const livro = {
            codigo,
            nome,
            lingua,
            ano
        };

        await dbPostgres.query("INSERT\
                             INTO livro (codigo, nome, lingua, ano)\
                             VALUES ($1, $2, $3, $4)", 
                             [codigo, nome, lingua, ano])

        console.log(livro)
    }

}


async function editora() {
    const quantidadeEditoras = 50; 

    for (let i = 0; i < quantidadeEditoras; i++) {
        const codigo = i + 1;
        const nome = faker.lorem.word();
        const endereco = faker.location.streetAddress();
        const telefone = faker.number.int({min:980000000, max:999999999});
       
        await dbPostgres.query("INSERT INTO editora (codigo, nome, endereco, telefone) VALUES ($1, $2, $3, $4)",
                                [codigo, nome, endereco, telefone]);
 
        console.log(`Editora ${i+1} inserida:`);
        console.log("Código:", codigo);
        console.log("Nome:", nome);
        console.log("Endereço:", endereco);
        console.log("Telefone:", telefone);
        console.log("-----------------------");
    }
}

async function edicao() {
    const quantidadeEditoras = 50;

    // Gerar edições para cada livro
    for (let i = 0; i < 1000; i++) {
        const isbn = i

        const cod_livro = faker.number.int({ min: 1001, max: 1400 });
        const cod_editora = faker.number.int({ min: 1, max: quantidadeEditoras });
        const preco = faker.finance.amount();
        const ano = faker.number.int({ min: 1800, max: 2024 });
        const numero_paginas = faker.number.int({ min: 50, max: 1000 });
        const quantidade_estoque = faker.number.int({ min: 1, max: 100 });

        await dbPostgres.query("INSERT INTO edicao (isbn, cod_livro, cod_editora, preco, ano, numero_paginas, quantidade_estoque) VALUES ($1, $2, $3, $4, $5, $6, $7)",
                                [isbn, cod_livro, cod_editora, preco, ano, numero_paginas, quantidade_estoque]);

                                
        console.log(`Edição para o livro ${cod_livro} inserida:`);
        console.log("Cod_Livro:", cod_livro);
        console.log("Cod_Editora:", cod_editora);
        console.log("Preço:", preco);
        console.log("Ano:", ano);
        console.log("Número de Páginas:", numero_paginas);
        console.log("Quantidade em Estoque:", quantidade_estoque);
        console.log("-----------------------");
    }
}




//autor()
//livro();
//autorlivro()
//editora();
 edicao();
