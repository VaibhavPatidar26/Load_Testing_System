import { error } from "node:console";

const url = "http://localhost:3000/test";

async function loadtest() {

    const startTime: number = Date.now();
    const actualReqSend = 100;

    let successfulRequests: number = 0;
    let failedReq: number = 0;

    const requests:Promise<Response>[] = [];

    for (let i = 1; i <= actualReqSend; i++) {
        if(i===50){
            requests.push(Promise.reject(new Error("rejected requested 50 manually")));
            continue;
        }
        const promise = fetch(url);
        console.log("request",i,promise);
        requests.push(promise);
    }

    const responses = await Promise.allSettled(requests);
    console.log(responses[0]);
    for (let i = 0; i < responses.length; i++) {
        if (responses[i]?.status==="fulfilled") {
            successfulRequests++;
        }
        else {
            failedReq++;
        }
    }

    const finalTime: number = Date.now();
    const totalTime: number = finalTime - startTime;

    const requestsPerSecond = actualReqSend / (totalTime / 1000);

    console.log("Total Requests:", actualReqSend);
    console.log("Successful:", successfulRequests);
    console.log("Failed:", failedReq);
    console.log("Total Time:", totalTime, "ms");
    console.log("Requests Per Second:", requestsPerSecond);
}

loadtest();