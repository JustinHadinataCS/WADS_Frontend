import { useQuery, useMutation } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { newMessage, getMessageHistory } from "../api/chatbot";
import { useAuthContext } from "./AuthContext";

const ChatbotContext = createContext();

function ChatbotProvider({ children }){
    const { user } = useAuthContext();

    const botMessageHistoryQuery = useQuery({
        queryKey: ["botMessageHistory"],
        queryFn: () => getMessageHistory(user.token),
        enabled: !!user.token,
    })

    const newBotMessageMutation = useMutation({
        mutationFn: (messageData) => newMessage(user.token, messageData),
        onSuccess: (data) =>{
            console.log(data)
        },
        onError: (error) => console.error(`Error: ${error.message}`),
    })

    return(
        <ChatbotContext.Provider
            value={{
                botMessageHistory: botMessageHistoryQuery.data,
                botMessageHistoryLoading: botMessageHistoryQuery.isLoading,
                botMessageHistoryError: botMessageHistoryQuery.error,
                refetchbotMessageHistory: botMessageHistoryQuery.refetch,

                newBotMessage: newBotMessageMutation.mutate,
                newBotMessageLoading: newBotMessageMutation.isLoading,
                newBotMessageError: newBotMessageMutation.error,
                newBotMessageMutation
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