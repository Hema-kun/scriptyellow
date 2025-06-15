const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => {
    let i = 0;
    while (i < name.length) {
        return `${name} : ${name[1]} : indeks-${i}`;
        i++

    }
});

console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * 
 */