import React, { useState } from 'react';
import { ChatSession } from '../../hooks/useChatSession';

interface SidebarSessionItemProps {
  session: ChatSession;
  isActive: boolean;
  onSelect: (id: string) => void;
  onUpdateTitle: (id: string, title: string) => void;
  onDeleteRequest: (id: string) => void;
}

export const SidebarSessionItem: React.FC<SidebarSessionItemProps> = ({
  session,
  isActive,
  onSelect,
  onUpdateTitle,
  onDeleteRequest
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(session.title);

  const handleEditStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
    setEditTitle(session.title);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onUpdateTitle(session.id, editTitle);
    setIsEditing(false);
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(false);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDeleteRequest(session.id);
  };

  return (
    <div 
        onClick={() => { if (!isEditing) onSelect(session.id); }}
        className={`group p-3 rounded-lg cursor-pointer transition-all relative mb-1 ${
            isActive 
            ? 'bg-indigo-600/80 text-white shadow-md shadow-indigo-500/20' 
            : 'hover:bg-white/5 text-slate-400 hover:text-slate-200'
        }`}
    >
        {isEditing ? (
        <form 
            onSubmit={handleSave} 
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 w-full"
        >
            <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="flex-1 bg-black/30 border border-white/20 text-white text-xs px-2 py-1 rounded focus:outline-none focus:border-indigo-400"
                autoFocus
                onKeyDown={(e) => {
                    if(e.key === 'Escape') handleCancel(e as any);
                }}
            />
            <button type="submit" className="text-emerald-400 hover:text-emerald-300">
                <span className="material-icons text-sm">check</span>
            </button>
            <button type="button" onClick={handleCancel} className="text-red-400 hover:text-red-300">
                <span className="material-icons text-sm">close</span>
            </button>
        </form>
        ) : (
        <>
            <div className="font-medium text-sm truncate pr-8">{session.title}</div>
            
            <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 flex items-center gap-1">
                <button 
                    onClick={handleEditStart}
                    className="p-1 text-slate-400 hover:text-white transition-colors"
                >
                    <span className="material-icons text-[14px]">edit</span>
                </button>
                <button 
                    onClick={handleDelete}
                    className="p-1 text-slate-400 hover:text-red-400 transition-colors"
                >
                    <span className="material-icons text-[14px]">delete</span>
                </button>
            </div>
        </>
        )}
    </div>
  );
};