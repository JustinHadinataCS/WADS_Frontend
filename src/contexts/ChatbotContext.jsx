import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getMessageHistory } from "../api/chatbot";
import { useAuthContext } from "./AuthContext";

const ChatbotContext = createContext();

function ChatbotProvider({ children }){
    const { user } = useAuthContext();

    const botMessageHistoryQuery = useQuery({
        queryKey: ["botMessageHistory"],
            queryFn: () => getMessageHistory(user.token),
            enabled: !!user.token,
    })

    return(
        <ChatbotContext.Provider
            value={{
                botMessageHistory: botMessageHistoryQuery.data,
                botMessageHistoryLoading: botMessageHistoryQuery.isLoading,
                botMessageHistoryError: botMessageHistoryQuery.error,
                refetchbotMessageHistory: botMessageHistoryQuery.refetch
            }}
        >
            {children}
        </ChatbotContext.Provider>
    )
}

function useChatbotContext() {
    const context = useContext(ChatbotContext);
    if(!context) throw new Error("ChatbotContext is used outside of provider");
    return context;
}

export {useChatbotContext, ChatbotProvider}