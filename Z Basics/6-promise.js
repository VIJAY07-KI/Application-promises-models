// Create a new promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        // Simulate a successful operation (resolve) or an error (reject)
        const success = true; // Change to `false` to test rejection
        if (success) {
            resolve("Operation was successful!");
        } else { 
            reject("Operation failed.");
        }
    }, 2000); // 2 seconds delay
});

// Use the promise
myPromise
    .then((message) => {
        // This block runs if the promise is resolved
        console.log(message); // Output: "Operation was successful!"
    })
    .catch((error) => {
        // This block runs if the promise is rejected
        console.error(error); // Output: "Operation failed."
    })
    .finally(() => {
        // This block runs regardless of the promise's outcome
        console.log("Operation complete.");
    });
