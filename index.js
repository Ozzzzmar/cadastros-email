const cadastros = [
  {nome: "Bruno", idade: "24", email: "brunoreidelas345@gmail.com"},
  {nome: "Cleiton", idade: "48", email: "cleitindograu2@hotmail.com"},
  {nome: "Linda", idade: "18", email: "feia123@outlook.com"}
];

console.log("Olá, por favor, digite o seu e-mail");

process.stdin.on("data", function (data) {
    let entrada = data.toString().trim();
    // let email = false;
    let usuario;

    for(let i = 0; i < cadastros.length; i++){
        if(entrada == cadastros[i].email){
            // email = true;
            usuario = cadastros[i];
        }
    }

    if(usuario){
        console.log("Seja Bem Vindo(a) " + usuario.nome + "!");
    }else{
        console.log("Você não está cadastrado!");
    }
process.exit();
});