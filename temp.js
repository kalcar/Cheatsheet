function bigfunc(){
    console.log('adding every number to 1,000,000,000')

    return new Promise((resolve, reject)=>{
        let sum = 0;
        for (let i = 0; i < 2000000000; i++){
            sum = sum + i;
        };
        resolve(sum);

        // on error reject(err)
    });

};