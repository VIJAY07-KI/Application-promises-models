const step1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 1 completed");
        }, 1000);
    });
};

step1()
    .then((message) => {
        console.log(message); // Output: "Step 1 completed"
    })
    .then((message) => {
        console.log(message); // Output: "Step 1 completed, Step 2 completed"
    });

    /*
crud 
c - create - post httpmethod 
r - read  - get httpmethod
u - update - put httpmethod 

d - delete - delete httpmethod */