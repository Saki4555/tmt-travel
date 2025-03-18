


import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react';

export function DeleteConfirmationModal({ isOpen, setIsOpen, onConfirm }) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/15">
        <DialogPanel className="max-w-lg space-y-4  bg-white p-6 rounded-lg shadow-lg">
          <DialogTitle className="font-bold text-lg">Confirm Deletion</DialogTitle>
          <Description className="text-gray-600">
            Are you sure you want to delete this deal? This action cannot be undone.
          </Description>
          <div className="flex gap-4 justify-end">
            <button 
              className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button 
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              onClick={() => {
                onConfirm(); 
                setIsOpen(false); 
              }}
            >
              Confirm
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
