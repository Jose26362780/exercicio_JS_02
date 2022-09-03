/*

Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e,
 cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada
 aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/



const students =  [
    {
        name: "Angela",
        firstNote:16.4,
        secondNote:10,
    },
    {
        name: "Carolina",
        firstNote:14.7,
        secondNote:18,
    },
    {
        name: "Miguel",
        firstNote:20,
        secondNote:15,
    },
    {
        name: "Daniel",
        firstNote:19,
        secondNote:17,
    },
]
// function 

function average(firstNote,secondNote){
    result = (firstNote + secondNote) / 2 
    return result
}

function resultStudent(student){
    result = average(student.firstNote,student.secondNote);
    if (result >=7){
        return ` A media do(a) Aluno(a) ${student.name} é ${result}
        Parabens ${student.name}, você passou no concurso.!`;
    }else {
    return ` A media do(a) Aluno(a) ${student.name} é : ${result}
        Não foi dessa vez ${student.name}, Tente novamente!`;
    }
}

for (let student of students){
    alert (`A media do (a) Aluno(a) ${student.name} é: ${average(student.firstNote, student.secondNote)}`)

}


for ( let student of students){
    let showResult = resultStudent(student);
    alert(showResult)
}