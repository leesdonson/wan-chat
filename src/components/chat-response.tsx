import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ChatResponse({ chat }: { chat: string }) {
  return (
    <div className="w-full overflow-y-auto rounded-xl mb-3 h-[430px]">
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        showLineNumbers={true}
        wrapLongLines={true}
      >
        {chat}
      </SyntaxHighlighter>
    </div>
  );
}
