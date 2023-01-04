const { Configuration, OpenAIApi } = require("openai");
const { GetEnv } = require("./env.js");
const { readFileSync } = require("fs");
const Mustache = require("mustache");

class OpenAI {

    // The client for openai
    constructor() {
        const env = GetEnv();

        // Create a client for openai
        const configuration = new Configuration({
            apiKey: env.apiKey,
        });
        const openai = new OpenAIApi(configuration);
        this.client = openai;
    }

    // Complete a prompt
    // Use default parameters for the completion
    // if code is true, use the codex model
    // Returns the text of the completion
    async complete(prompt, code) {
        const response = await this.openai.createCompletion({
            model: code ? "code-davinci-002" : "text-davinci-003",
            prompt: prompt,
            max_tokens: code ? 8000 : 4000,
            n: 1,
            best_of: 1,
        });
        return response.data.choices[0].text;
    }

    // Complete a prompt with the input templated into a template by Mustache
    async completeTemplate(promptTemplatePath, data, code) {
        const templatePath = readFileSync(promptTemplatePath, "utf8");
        const prompt = Mustache.render(templatePath, data);
        return await this.complete(prompt, code);
    }
}
