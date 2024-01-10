// Immedately Invoked function expressions (IIFE)

(
    function chai(){
        // named IIFE
        console.log(`DB CONNECTED`);
    }
)();
// unNamed IIFE
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('MySql');

