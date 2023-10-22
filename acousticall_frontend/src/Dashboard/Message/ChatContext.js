import { createContext, useReducer, useContext } from 'react';

const ChatContext = createContext();

const chatReducer = (state, action) => {
  // your reducer logic here
};

const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, {
    // initial state
  });

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

export { ChatProvider, useChatContext };
