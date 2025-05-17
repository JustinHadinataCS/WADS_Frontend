export default function BotMessage({ content, buttons, children }) {
    return (
      <div className="flex mb-8">
        <div className="w-8 h-8 rounded-full bg-[#1D3B5C] flex items-center justify-center text-white mr-2">
          AI
        </div>
        <div className="max-w-3/4">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-gray-800">
              {content}
              {buttons}
              {children}
            </p>
          </div>
        </div>
      </div>
    );
  }