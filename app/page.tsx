import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {

  return (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full h-svh ">
      <h1 className="text-2xl md:text-4xl mb-4">
        Welcome to Ammiya 🔮
      </h1>
      <ul>
        <li className="text-l">
          🎯
          <span className="ml-2">
            This mock-up template showcases a translator LLM that will be trained on translating spoken Arabic dialects.
          </span>
        </li>
        <li className="text-l">
          📖
          <span className="ml-2">
            This translator will be able in the future to provide translation in the requested spoken Arabic dialect.
          </span>
        </li>
        <li className="text-l">
          📝
          <span className="ml-2">
            Current auto translation services are not fully capable of dealing with spoken dialects. This project aims to solve this problem.
          </span>
        </li>
        <li className="text-l">
          🔊
          <span className="ml-2">
            The project will train on text files as well as on audio files using{" "}
            <a href="https://openai.com/research/whisper" target="_blank">
              Whisper
            </a>{" "} and use distinct phonetic sounds to identify the spoken language.
          </span>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            Relevant Tech stack to acheive this goal: {" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{", "}
            the Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            and the OpenAI{" "}
            <a href="https://platform.openai.com/docs/introduction" target="_blank">
              API
            </a>.
          </span>
        </li>
        <li>
          📁
          <span className="ml-2">
            The project intends to allow uploading various file formats and accept audio to translate.
          </span>
        </li>
        <li>
          👨🏽‍🏫
          <span className="ml-2">
            For now, give Muhsen, our translator, a try. He will try his absolute best to translate your text to Egyptian Arabic.
            He might not succeed yet, as he is still learning, but he will get there!
          </span>
        </li>
        <li className="text-l">
          👆🏽
          <span className="ml-2">
            Go to the translate tab and write whatever text you want for Muhsen like
            {
              " "
            }<code>How are you doing?</code>
          </span>
        </li>
      </ul>
    </div>
  );
}
