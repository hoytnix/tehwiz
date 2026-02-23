import React, { useState, useRef } from 'react';
import { ImageBuffer, processFile } from '../../utils/fileHelpers';

interface ChatInputAreaProps {
  onSend: (text: string, images: { data: string; mimeType: string }[]) => void;
  isProcessing: boolean;
  placeholder?: string;
}

export const ChatInputArea: React.FC<ChatInputAreaProps> = ({ 
    onSend, 
    isProcessing,
    placeholder = "Message Archie..."
}) => {
  const [input, setInput] = useState('');
  const [pendingImages, setPendingImages] = useState<ImageBuffer[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const processed = await Promise.all(files.map(processFile));
      setPendingImages(prev => [...prev, ...processed]);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (index: number) => {
      setPendingImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((!input.trim() && pendingImages.length === 0) || isProcessing) return;

    onSend(input, pendingImages.map(img => ({ data: img.data, mimeType: img.mimeType })));
    setInput('');
    setPendingImages([]);
  };

  return (
    <div className="p-4 md:p-6 bg-gradient-to-t from-slate-900/80 to-transparent">
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-3 max-w-4xl mx-auto">
        
        {/* Image Preview Strip */}
        {pendingImages.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md animate-[slideUp_0.2s_ease-out]">
                {pendingImages.map((img, idx) => (
                    <div key={idx} className="relative group">
                        <img src={img.previewUrl} alt="Preview" className="h-16 w-24 object-cover rounded-lg border border-white/10 shadow-sm" />
                        <button 
                            type="button"
                            onClick={() => removeImage(idx)}
                            className="absolute -top-2 -right-2 bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-red-500 transition-colors"
                        >
                            <span className="material-icons text-[14px]">close</span>
                        </button>
                    </div>
                ))}
                <span className="text-xs text-slate-400 font-medium px-2">{pendingImages.length} attached</span>
            </div>
        )}

        {/* Input Bar */}
        <div className="flex items-end gap-2 p-1.5 bg-white/10 border border-white/10 rounded-3xl backdrop-blur-xl shadow-lg focus-within:bg-white/15 focus-within:border-indigo-400/30 transition-all">
            <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                multiple
                onChange={handleFileSelect}
            />
            <button 
                type="button" 
                onClick={() => fileInputRef.current?.click()}
                className={`p-3 rounded-full transition-all flex items-center justify-center ${
                    pendingImages.length > 0 
                    ? 'text-indigo-400 bg-indigo-500/10' 
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`}
                title="Upload Images"
            >
                <span className="material-icons">add_photo_alternate</span>
            </button>

            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e);
                    }
                }}
                className="w-full bg-transparent border-none text-slate-100 placeholder-slate-400/70 focus:ring-0 py-3.5 px-2 max-h-32 resize-none font-sans text-sm md:text-base"
                placeholder={placeholder}
                rows={1}
                style={{ minHeight: '48px' }}
            />

            <button 
            type="submit" 
            disabled={isProcessing || (!input.trim() && pendingImages.length === 0)}
            className="p-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-500 transition-all disabled:opacity-50 disabled:bg-slate-700 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/20 m-1"
            >
             <span className="material-icons text-xl">arrow_upward</span>
            </button>
        </div>
        </form>
    </div>
  );
};