function randomica(min=1000, max = 3000){
    const num =  Math.random() * (max - min) + min
    return Math.floor(num)
}
console.log(randomica())

function f1(callback) {
    setTimeout( function(){
        console.log(f1)
        if(callback) callback();
    }, randomica())
}

function f2() {
    setTimeout( function(callback){
        console.log(f2)
        if(callback) callback();
    }, randomica())
}

function f3() {
    setTimeout( function(callback){
        console.log(f3)
        if(callback) callback();
    }, randomica())
}

f1(f1callback)

function f1callback(){
    f2(callback)
}

f2()
f3()

console.log('front end')