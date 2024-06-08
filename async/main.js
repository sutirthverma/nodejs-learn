//initiate
//middleware
//terminator

//initiate
function initiate(){
    const someInput = "This is input";
    middleware(someInput, function (result){
        console.log(result);
    })
}

//middleware
function middleware(someInput, callback){
    return terminator(`${someInput} touched by middleware`, callback);
}

//terminator
function terminator(someInput, callback){
    return callback(`${someInput} terminated by terminator`, callback);
}

initiate();