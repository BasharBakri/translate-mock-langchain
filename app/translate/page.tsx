import { ChatWindow } from "@/components/ChatWindow";
import { Button } from "@/components/ui/Button";
import { UploadDocumentsForm } from "@/components/UploadDocumentsForm";

export default function TranslatePage() {
  const isLoading = false;
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
        titleText="🇪🇬 Translation"
      ></ChatWindow>
    </>
  );
}
