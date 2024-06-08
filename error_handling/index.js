function demoApi(){
    return new Promise((res, rej) => setTimeout(function(){
        res(10);
    }, 2000));
}

async function callDemoApi(){
    let result = await demoApi();
    if(result > 10){
        throw new Error('result not greater than 10');
    }
    console.log('result generated successfully', result);
    return result;
}


try{
    let result = await callDemoApi();
    if(result == 10){
        console.log('great success');
    }else{
        console.log('not great success');
    }
}catch(err){
    console.log(err);
}