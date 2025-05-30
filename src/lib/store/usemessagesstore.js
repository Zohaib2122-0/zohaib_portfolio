

import { create } from 'zustand';

import axioinstance from '../axios';

export const usemessagesstore = create((set) => ({
  messages: [], // Messages state
  loading: false, // Loading state

  // Send a new message
  sendMessage: async (messageData) => {
    try {
      // const response = await axioinstance.post('https://faisal-hm.vercel.app/api/sendmessage', messageData);
    
       const baseURL =
                            typeof window !== "undefined" && window.location.hostname === "localhost"
                                ? "http://localhost:3000"
                                : "https://faisal-hm.vercel.app";
                
                        const response = await axioinstance.post(`${baseURL}/api/sendmessage`, messageData);
      
      set((state) => ({
        messages: [...state.messages, response.data], // Add new message to the state
      }));
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  },

  // Get all messages from backend
  getMessages: async () => {
    set({ loading: true });
    try {
      // const response = await axioinstance.get('https://faisal-hm.vercel.app/api/getmessages');

       const baseURL =
                  typeof window !== "undefined" && window.location.hostname === "localhost"
                      ? "http://localhost:3000"
                      : "https://faisal-hm.vercel.app";
      
              const response = await axioinstance.get(`${baseURL}/api/getmessages`);

      set({ messages: response.data.getmessages, loading: false });
      console.log(response.data.getmessages); // Verify response structure


    } catch (error) {
      console.error('Failed to fetch messages:', error);
      set({ loading: false });
    }
  },
}));


