import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {

  return (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Welcome to Ammiya 🔮
      </h1>
      <ul>
        <li className="text-l">
          🎈
          <span className="ml-2">
            This mock-up template showcases a translator LLM that will be trained on Arabic dialects.
          </span>
        </li>
        <li className="text-l">
          📝
          <span className="ml-2">
            LLMs and other translators aren't fully capable of translating spoken dialects. As most of their data set comes from formal text or MSA "Modern Standard Arabic".
          </span>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            Relevant Tech stack to acheive this goal: {" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            and the Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            and the OpenAI{" "}
            <a href="https://platform.openai.com/docs/introduction" target="_blank">
              API
            </a>{" "}
          </span>
        </li>
        <li>
          👨🏽‍🏫
          <span className="ml-2">
            Why not give Muhsen, our translator, a try? He'll try his absolute best to translate your text to Egyptian Arabic.
            He might not succeed yet, as he's still learning, but he'll get there!
          </span>
        </li>
        <li className="text-l">
          👆🏽
          <span className="ml-2">
            Go to the translate tab and write whatever text you want for Muhsen like <code>How are you doing?</code>
          </span>
        </li>
      </ul>
    </div>
  );
}
