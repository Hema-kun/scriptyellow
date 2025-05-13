

const names = ['Harry','Ron','Jeff','Thomas'];

const newNames = [];

for(let i=0;i<names.length;i++){
    newNames.push(`${names[i]}`)
    newNames.push(`Elemen ${i+1} di indeks ${i} `)
}

console.log(newNames);