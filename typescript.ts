const user = {
    name: "Max",
    age: 18,
    gender: 'male'
}

function sum(a, b): number {
    return a + b
}

function showSum(a:number, b:number) {
    console.log(a + b);
}

function incAge(someUser, inc):object {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
console.log(incAge(user, 2));