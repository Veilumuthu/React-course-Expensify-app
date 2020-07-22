const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data');
        // resolve('this is my other resolved data');
        reject('Something went wrong')
    }, 5000)
});


promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error:', error)
});
