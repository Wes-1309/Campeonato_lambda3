'use strict'

const limparEscolha = document.getElementById('check').value = '';

const url = "https://l3-processoseletivo.azurewebsites.net/api/Competidores?copa=games";

function getGame(){
    axios.get(url)
    .then(response =>{
        const titulo = response.data[1].titulo;
        const imagem = response.data[1].urlImagem;
        const dir1 = response.data[1].id;
        const ano1 = response.data[1].ano;
        const nota1 = response.data[1].nota;

        game1.textContent = JSON.stringify(titulo);
        document.querySelector('#img_game1').innerHTML = `<img src="${imagem}" />`;
        document.querySelector('#diretorio').innerHTML = `<p>Diretório: ${dir1}</p>`;
        document.querySelector('#ano1').innerHTML = `<p>"Ano: ${ano1}</p>`;
        document.querySelector('#nota1').innerHTML = `<p>Nota: ${nota1}</p>`;


        const titulo2 = response.data[2].titulo;
        const imagem2 = response.data[2].urlImagem;
        const dir2 = response.data[2].id;
        const ano2 = response.data[2].ano;
        const nota2 = response.data[2].nota;

        game2.textContent = JSON.stringify(titulo2);
        document.querySelector('#img_game2').innerHTML = `<img src="${imagem2}" />`;
        document.querySelector('#diretorio2').innerHTML = `<p>Diretório: ${dir2}</p>`;
        document.querySelector('#ano2').innerHTML = `<p>Ano: ${ano2}</p>`;
        document.querySelector('#nota2').innerHTML = `<p>Nota: ${nota2}</p>`;

        const titulo3 = response.data[3].titulo;
        const imagem3 = response.data[3].urlImagem;
        const dir3 = response.data[3].id;
        const ano3 = response.data[3].ano;
        const nota3 = response.data[3].nota;

        game3.textContent = JSON.stringify(titulo3);
        document.querySelector('#img_game3').innerHTML = `<img src="${imagem3}" />`;
        document.querySelector('#diretorio3').innerHTML = `<p>Diretório: ${dir3}</p>`;
        document.querySelector('#ano3').innerHTML = `<p>Ano: ${ano3}</p>`;
        document.querySelector('#nota3').innerHTML = `<p>Nota: ${nota3}</p>`;

        const titulo4 = response.data[17].titulo;
        const imagem4 = response.data[17].urlImagem;
        const dir4 = response.data[17].id;
        const ano4 = response.data[17].ano;
        const nota4 = response.data[17].nota;
        game4.textContent = JSON.stringify(titulo4);
        document.querySelector('#img_game4').innerHTML = `<img src="${imagem4}" />`;
        document.querySelector('#diretorio4').innerHTML = `<p>Diretório: ${dir4}</p>`;
        document.querySelector('#ano4').innerHTML = `<p>Ano: ${ano4}</p>`;
        document.querySelector('#nota4').innerHTML = `<p>Nota: ${nota4}</p>`;
        
        const titulo5 = response.data[5].titulo;
        const imagem5 = response.data[5].urlImagem;
        const dir5 = response.data[5].id;
        const ano5 = response.data[5].ano;
        const nota5 = response.data[5].nota;
        game5.textContent = JSON.stringify(titulo5);
        document.querySelector('#img_game5').innerHTML = `<img src="${imagem5}" />`;
        document.querySelector('#diretorio5').innerHTML = `<p>Diretório: ${dir5}</p>`;
        document.querySelector('#ano5').innerHTML = `<p>Ano: ${ano5}</p>`;
        document.querySelector('#nota5').innerHTML = `<p>Nota: ${nota5}</p>`;

        const titulo6 = response.data[14].titulo;
        const imagem6 = response.data[14].urlImagem;
        const dir6 = response.data[6].id;
        const ano6 = response.data[6].ano;
        const nota6 = response.data[6].nota;
        game6.textContent = JSON.stringify(titulo6);
        document.querySelector('#img_game6').innerHTML = `<img src="${imagem6}" />`;
        document.querySelector('#diretorio6').innerHTML = `<p>Diretório: ${dir6}</p>`;
        document.querySelector('#ano6').innerHTML = `<p>Ano: ${ano6}</p>`;
        document.querySelector('#nota6').innerHTML = `<p>Nota: ${nota6}</p>`;
        
        const titulo7 = response.data[7].titulo;
        const imagem7 = response.data[7].urlImagem;
        const dir7 = response.data[7].id;
        const ano7 = response.data[7].ano;
        const nota7 = response.data[7].nota;
        game7.textContent = JSON.stringify(titulo7);
        document.querySelector('#img_game7').innerHTML = `<img src="${imagem7}" />`;
        document.querySelector('#diretorio7').innerHTML = `<p>Diretório: ${dir7}</p>`;
        document.querySelector('#ano7').innerHTML = `<p>Ano: ${ano7}</p>`;
        document.querySelector('#nota7').innerHTML = `<p>Nota: ${nota7}</p>`;

        const titulo8 = response.data[13].titulo;
        const imagem8 = response.data[13].urlImagem;
        const dir8 = response.data[13].id;
        const ano8 = response.data[13].ano;
        const nota8 = response.data[13].nota;
        game8.textContent = JSON.stringify(titulo8);
        document.querySelector('#img_game8').innerHTML = `<img src="${imagem8}" />`;
        document.querySelector('#diretorio8').innerHTML = `<p>Diretório: ${dir8}</p>`;
        document.querySelector('#ano8').innerHTML = `<p>Ano: ${ano8}</p>`;
        document.querySelector('#nota8').innerHTML = `<p>Nota: ${nota8}</p>`;

        const titulo9 = response.data[9].titulo;
        const imagem9 = response.data[9].urlImagem;
        const dir9 = response.data[9].id;
        const ano9 = response.data[9].ano;
        const nota9 = response.data[9].nota;
        game9.textContent = JSON.stringify(titulo9);
        document.querySelector('#img_game9').innerHTML = `<img src="${imagem9}" />`;
        document.querySelector('#diretorio9').innerHTML = `<p>Diretório: ${dir9}</p>`;
        document.querySelector('#ano9').innerHTML = `<p>Ano: ${ano9}</p>`;
        document.querySelector('#nota9').innerHTML = `<p>Nota: ${nota9}</p>`;

        const titulo10 = response.data[10].titulo;
        const imagem10 = response.data[10].urlImagem;
        const dir10 = response.data[10].id;
        const ano10 = response.data[10].ano;
        const nota10 = response.data[10].nota;
        game10.textContent = JSON.stringify(titulo10);
        document.querySelector('#img_game10').innerHTML = `<img src="${imagem10}" />`;
        document.querySelector('#diretorio10').innerHTML = `<p>Diretório: ${dir10}</p>`;
        document.querySelector('#ano10').innerHTML = `<p>Ano: ${ano10}</p>`;
        document.querySelector('#nota10').innerHTML = `<p>Nota: ${nota10}</p>`;

        const titulo11 = response.data[11].titulo;
        const imagem11 = response.data[11].urlImagem;
        const dir11 = response.data[11].id;
        const ano11 = response.data[11].ano;
        const nota11 = response.data[11].nota;
        game11.textContent = JSON.stringify(titulo10);
        document.querySelector('#img_game11').innerHTML = `<img src="${imagem11}" />`;
        document.querySelector('#diretorio11').innerHTML = `<p>Diretório: ${dir11}</p>`;
        document.querySelector('#ano11').innerHTML = `<p>Ano: ${ano11}</p>`;
        document.querySelector('#nota11').innerHTML = `<p>Nota: ${nota11}</p>`;

        const titulo12 = response.data[12].titulo;
        const imagem12 = response.data[12].urlImagem;
        const dir12 = response.data[12].id;
        const ano12 = response.data[12].ano;
        const nota12 = response.data[12].nota;
        game12.textContent = JSON.stringify(titulo12);
        document.querySelector('#img_game12').innerHTML = `<img src="${imagem12}" />`;
        document.querySelector('#diretorio12').innerHTML = `<p>Diretório: ${dir12}</p>`;
        document.querySelector('#ano12').innerHTML = `<p>Ano: ${ano12}</p>`;
        document.querySelector('#nota12').innerHTML = `<p>Nota: ${nota12}</p>`;

       

    })
    .catch(error => console.log(error));
}

getGame();







