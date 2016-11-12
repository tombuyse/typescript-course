
function resolveAfter(milliSeconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('The situation has been resolved');
        }, milliSeconds);
    });
}

resolveAfter(5000).then(message => {
   console.log(`Message is: ${message}`);
});