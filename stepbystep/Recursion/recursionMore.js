const a = ()=>{
    return 'hello ' + b()
}

const b = ()=>{
    return 'my '+ c();
}

const c= ()=>{
    return 'friends'
}

console.log(a());