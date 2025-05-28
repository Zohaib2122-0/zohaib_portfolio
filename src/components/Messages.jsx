

import React, { useEffect, useCallback } from 'react';
import { usemessagesstore } from '../lib/store/usemessagesstore';

const Messages = () => {
  const messages = usemessagesstore((state) => state.messages);
  const loading = usemessagesstore((state) => state.loading);
  const getMessages = usemessagesstore((state) => state.getMessages);

  const fetchMessages = useCallback(() => {
    getMessages();
  }, [getMessages]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  if (loading) {
    return <div className="text-center text-xl py-10">Loading messages...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Messages</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Phone</th>
              <th className="px-4 py-2 border-b">Subject</th>
              <th className="px-4 py-2 border-b">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{msg.name}</td>
                  <td className="px-4 py-2 border-b">{msg.phone}</td>
                  <td className="px-4 py-2 border-b">{msg.subject}</td>
                  <td className="px-4 py-2 border-b">{msg.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No messages available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
