const url = "http://localhost:3000/test";

async function loadtest() {

    const startTime: number = Date.now();
const actualReqSend = 100;

    let totalReqExecuted: number = 0;
    let successfulRequests: number = 0;
    let failedReq: number = 0;
for(let i=1;i<=actualReqSend;i++){


    try {
        const response = await fetch(url);

        totalReqExecuted++;

        console.log("Status:", response.status);

        if (response.ok) {
            console.log("Request success");
            successfulRequests++;
        }
        else {
            console.log("Request fail");
            failedReq++;
        }
    }
    catch (error) {
        console.log("Error:", error);
        totalReqExecuted++;
        failedReq++;
    }
}

    const finalTime: number = Date.now();
    

    const totalTime: number = finalTime - startTime;
    const requestsPerSecond = actualReqSend / (totalTime / 1000);

    console.log("Total Actual Requests:", actualReqSend)
    console.log("Total Requests Executed:", totalReqExecuted);
    console.log("Successful:", successfulRequests);
    console.log("Failed:", failedReq);
    console.log("Total Time:", totalTime, "ms");
    console.log("Requests Per Second:", requestsPerSecond);

}

loadtest();