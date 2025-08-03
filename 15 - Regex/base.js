const texto = `
joão trouxe      flores para sua amda namorada em 10 de janeiro de 1970, 
maria era o nome dela.


Foi um ano exelente na vida de joão.  Teve 5 filhos, todos adultos atualemnte.
maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de 
domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso
pão de queijo.
Não canso de ouvir a Maria:
"Jooooooooooooãooooooooo, o café tá prontinho aquei. Veeem"!
`;
const arquivos = [
  "Atenção.jpg",
  "Foto.jpeg",
  "Meu gatinho.jpg",
  "Meu gatinho.JPG",
  "Meu gatinho.JPEG",
  "Marigo.png",
  "lista de compras.txt",
];

const alfabeto =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ®¡ 0123456789 ¡;";

const html = "<p>Olá mundo</p> <p>Olá de novo</p>  <div>Sou uma div</div>";

const cpfs = `
Os CPFs são:
  254.224.877-45 215.978.456-12 047.258.369-96 


  963.987.321-00

  963.987.32a.00 (NÃO VÁLIDO)
  963.987.32-00 (NÃO VÁLIDO)
`;

const ips = `

Os Ips são:
   0.0.0.0

   192.168.0.25

        10.10.5.12

        10.01.10.20 (ESTE IP NÃO É VÁLIDO)
        10.021.08.20 (ESTE IP NÃO É VÁLIDO)

   255.255.255.255

`;

module.exports = {
  texto,
  arquivos,
  html,
  alfabeto,
  cpfs,
  ips,
};
