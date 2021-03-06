const notas = [7, 8, 3, 5, 10, 9, 8, 8];

let valores = '';

// foreach
for(let nota of notas) {
    valores += nota + ' ';
}

console.log(valores);

let indices = '';

for(let indice in notas) {
    indices += indice + ' ';
}

console.log(indices);

git commit -m "Aprenda Algoritmo, Lógica de Programação e muito mais no curso que vai te ensinar de forma fácil a programar do Zero."

git config --global user.email "claudio.c.lima@hotmail.com"
git config --global user.name "claudiobelempb"