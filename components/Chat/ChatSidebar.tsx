import React, { useState } from 'react';
import { ChatSession } from '../../hooks/useChatSession';
import { SidebarSessionItem } from './SidebarSessionItem';
import { DeleteConfirmationModal } from './DeleteConfirmationModal';

interface ChatSidebarProps {
  sessions: ChatSession[];
  currentSessionId: string | null;
  onLoadSession: (id: string) => void;
  onNewSession: () => void;
  onDeleteSession: (id: string) => void;
  onUpdateTitle: (id: string, title: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const ChatSidebar: React.FC<ChatSidebarProps> = ({
  sessions,
  currentSessionId,
  onLoadSession,
  onNewSession,
  onDeleteSession,
  onUpdateTitle,
  isOpen,
  onClose
}) => {
  const [sessionToDelete, setSessionToDelete] = useState<string | null>(null);

  const confirmDelete = () => {
      if (sessionToDelete) {
          onDeleteSession(sessionToDelete);
          setSessionToDelete(null);
      }
  };

  return (
    <>
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 absolute md:relative z-30 w-72 h-full bg-slate-900/80 md:bg-white/5 backdrop-blur-xl border-r border-white/5 transition-transform duration-300 flex flex-col`}>
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <span className="text-slate-200 font-semibold tracking-wide text-sm">History</span>
              <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white"><span className="material-icons">close</span></button>
          </div>
          
          <button 
            onClick={() => { onNewSession(); onClose(); }}
            className="mx-4 mt-6 mb-2 py-3 px-4 bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white rounded-xl flex items-center justify-center gap-2 transition-all text-sm font-medium border border-indigo-500/20 hover:border-indigo-500/0"
          >
              <span className="material-icons text-sm">add</span>
              New Chat
          </button>

          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1 custom-scrollbar">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 py-2">Recent</div>
              {sessions.map(session => (
                  <SidebarSessionItem 
                    key={session.id}
                    session={session}
                    isActive={currentSessionId === session.id}
                    onSelect={(id) => {
                        onLoadSession(id);
                        onClose();
                    }}
                    onUpdateTitle={onUpdateTitle}
                    onDeleteRequest={setSessionToDelete}
                  />
              ))}
          </div>
      </div>

      <DeleteConfirmationModal 
        isOpen={!!sessionToDelete}
        onCancel={() => setSessionToDelete(null)}
        onConfirm={confirmDelete}
      />
    </>
  );
};