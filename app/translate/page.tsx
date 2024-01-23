import { ChatWindow } from "@/components/ChatWindow";

export default function TranslatePage() {

  return (
    <>
      <ChatWindow
        endpoint="api/chat/"
        emptyStateComponent={'Type something for Muhsen 👨🏽 to translate!'}
        // showIngestForm={true}
        placeholder={
          'Type: How are you doing?'
        }
        emoji="👨🏽"
        titleText="Translating to Egyptian Arabic"
      ></ChatWindow>
    </>
  );
}
