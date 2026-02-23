import React from 'react';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onCancel,
  onConfirm
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="bg-leet-black border border-red-500/50 p-6 rounded shadow-[0_0_20px_rgba(255,0,0,0.2)] max-w-md w-full space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" style={{backgroundSize: '100% 2px, 3px 100%'}}></div>
            
            <h3 className="text-xl font-bold text-red-500 flex items-center gap-2">
                <span className="material-icons animate-pulse">warning</span>
                CONFIRM DELETION
            </h3>
            
            <p className="text-gray-300 text-sm font-mono">
                Are you sure you want to purge this memory sequence? This action cannot be undone.
                <br/>
                <span className="text-red-500/50 text-xs mt-2 block">IRREVERSIBLE_OPERATION</span>
            </p>

            <div className="flex gap-4 justify-end">
                <button 
                    onClick={onCancel}
                    className="px-4 py-2 border border-leet-green/30 text-leet-green hover:bg-leet-green/10 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                >
                    Cancel
                </button>
                <button 
                    onClick={onConfirm}
                    className="px-4 py-2 bg-red-500/10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-black rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                    <span className="material-icons text-sm">delete_forever</span>
                    Purge
                </button>
            </div>
        </div>
    </div>
  );
};