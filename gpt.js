const { OpenAI } = require("./openai/client")

serenade.global().command("auto <%identifier%>", async (api, matches) => {
    const openaiClient = new OpenAI()
    const response = await openaiClient.complete( matches.userInput, false )
    await api.typeText(response)
})



