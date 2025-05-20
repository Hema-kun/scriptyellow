const employees = [
    {
        name: 'Fulan',
        email: 'fulan@dicoding.com',
        joinYear: 2020,
    }
]

function addEmployee(name, email, joinYear){

    const user = {
        name : name,
        email : email,
        joinYear : joinYear,
    }

    employees.push(user)
}

addEmployee('heru','heru@gmail.com',2025);
console.log(employees);