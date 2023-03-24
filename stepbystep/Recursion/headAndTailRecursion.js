const test =(x)=>{
    console.log(x); // Head recursion 
    if(x>0){
        test(x-1)
    }
    console.log(x); // Tail recursion
}

test(5)