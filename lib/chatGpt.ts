import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openAIApi = new OpenAIApi(configuration);

export default openAIApi;