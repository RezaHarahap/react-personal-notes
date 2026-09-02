import React from 'react';

function NoteActionButton({ variant, onClick, children }) {
  const isDelete = variant === 'delete';

  return (
    <button
      className={`note-item__${variant}-button`}
      type="button"
      onClick={onClick}
      data-testid={isDelete ? 'note-item-delete-button' : 'note-item-archive-button'}
    >
      {children}
    </button>
  );
}

export default NoteActionButton;
