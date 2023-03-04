import openAIApi from "./chatGpt";

const queryApi = async (prompt: string, chatId: string, model: string) => {

  return  await openAIApi.createCompletion({
      prompt: prompt,
      model: model,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0
  })
      .then(res => res.data.choices[0].text)
      .catch(err => `ChatGPT was not available to find an answer for that with Error ${err.message}`);
}

export default queryApi;