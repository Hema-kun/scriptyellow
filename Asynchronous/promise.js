function getUsers(isOffline){
    return new Promise((resolve, reject)=>{

        //simulate network
        setTimeout(()=>{
        const users = ['john','Jack','Abigail'];

        if (isOffline){
            reject (new Error('Cannot retrieve users due offline'));
            return;
        }

        resolve(users);
        }, 3000)

    })
}

getUsers(true)
    .then(users => console.log(users))
    .catch(error=> console.log(error.message));