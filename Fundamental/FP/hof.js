const hello = () =>{
    console.log('Hello')
}

const say = (someFunction) =>{
    someFunction();
}

const sayHello = () =>{
    return ()=>{
        console.log('Hello')
    }
}

hello();
sayHello(hello());
sayHello()();