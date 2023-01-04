function GetEnv() {
    const apiKey = process.env["OPENAI_API_KEY"];
    if (apiKey === undefined) {
        console.log("Please set the OPENAI_API_KEY environment variable.");
        process.exit(1);
    }
    return {
        apiKey: apiKey,
    };
}

