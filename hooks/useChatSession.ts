import { useState, useEffect } from 'react';
import { ChatMessage } from '../types';

export interface ChatSession {
  id: string;
  title: string;
  lastModified: number;
  messages: ChatMessage[];
}

export const useChatSession = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Initialize or Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('tehwiz_chat_sessions');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSessions(parsed);
          const mostRecent = parsed.sort((a: ChatSession, b: ChatSession) => b.lastModified - a.lastModified)[0];
          setCurrentSessionId(mostRecent.id);
          setMessages(mostRecent.messages);
          return;
        }
      } catch (e) {
        console.error("History corrupted, wiping...", e);
      }
    }
    initNewSession();
  }, []);

  // Sync state to LocalStorage and Session List
  useEffect(() => {
    if (!currentSessionId || messages.length === 0) return;

    setSessions(prev => {
        const index = prev.findIndex(s => s.id === currentSessionId);
        if (index === -1) return prev;

        const currentSession = prev[index];
        
        let newTitle = currentSession.title;
        if (newTitle === 'NEW_SEQUENCE') {
            const firstUserMsg = messages.find(m => m.role === 'user');
            if (firstUserMsg) {
                 newTitle = firstUserMsg.text 
                    ? (firstUserMsg.text.slice(0, 20) + (firstUserMsg.text.length > 20 ? '...' : '')) 
                    : (firstUserMsg.images && firstUserMsg.images.length > 0 ? 'MULTI_VISUAL_DATA' : 'NEW_SEQUENCE');
            }
        }

        const updatedSession = {
            ...currentSession,
            messages: messages,
            title: newTitle,
            lastModified: Date.now()
        };

        const newSessions = [...prev];
        newSessions[index] = updatedSession;
        // Sort by last modified
        newSessions.sort((a, b) => b.lastModified - a.lastModified);
        
        localStorage.setItem('tehwiz_chat_sessions', JSON.stringify(newSessions));
        return newSessions;
    });
  }, [messages, currentSessionId]);

  const initNewSession = () => {
      const newId = Date.now().toString();
      const initialMsg: ChatMessage = {
        id: 'init',
        role: 'system',
        text: '> SYSTEM DETECTED: VISITOR.\n> LOADING PERSONA: ARCHIE...\n> MEMORY BANKS: WIPED.\n> READY.',
        timestamp: Date.now()
      };
      const newSession: ChatSession = {
          id: newId,
          title: 'NEW_SEQUENCE',
          lastModified: Date.now(),
          messages: [initialMsg]
      };
      
      setSessions(prev => [newSession, ...prev]);
      setCurrentSessionId(newId);
      setMessages([initialMsg]);
  };

  const loadSession = (id: string) => {
      const session = sessions.find(s => s.id === id);
      if (session) {
          setCurrentSessionId(id);
          setMessages(session.messages);
      }
  };

  const deleteSession = (idToDelete: string) => {
      const newSessions = sessions.filter(s => s.id !== idToDelete);
      setSessions(newSessions);
      localStorage.setItem('tehwiz_chat_sessions', JSON.stringify(newSessions));
      
      if (idToDelete === currentSessionId) {
          if (newSessions.length > 0) {
              loadSession(newSessions[0].id);
          } else {
              initNewSession();
          }
      }
  };

  const updateSessionTitle = (id: string, newTitle: string) => {
      if (!newTitle.trim()) return;
      const newSessions = sessions.map(s => 
          s.id === id ? { ...s, title: newTitle.trim() } : s
      );
      setSessions(newSessions);
      localStorage.setItem('tehwiz_chat_sessions', JSON.stringify(newSessions));
  };

  return {
    sessions,
    currentSessionId,
    messages,
    setMessages,
    initNewSession,
    loadSession,
    deleteSession,
    updateSessionTitle
  };
};