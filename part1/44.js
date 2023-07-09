// function returning function 

function myfunc(){
    function Hello(){
        return "hello world";
    }
    return Hello;
}

const ans = myfunc();
console.log(ans());