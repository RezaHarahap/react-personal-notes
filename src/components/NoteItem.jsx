import React from 'react';
import { showFormattedDate } from '../utils';
import NoteActionButton from './NoteActionButton';

function highlightText(text, keyword) {
  const normalizedKeyword = keyword.trim();
  if (!normalizedKeyword) return text;
  const escapedKeyword = normalizedKeyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escapedKeyword})`, 'gi'));
  return parts.map((part, index) => (part.toLowerCase() === normalizedKeyword.toLowerCase() ? <mark key={`${part}-${index}`}>{part}</mark> : part));
}
function NoteItem({ note, onDelete, onArchive, searchKeyword = '' }) {
  return (
    <div className="note-item" data-testid="note-item" data-note-id={note?.id}>
      <div className="note-item__content" data-testid="note-item-content">
        <h3 className="note-item__title" data-testid="note-item-title">{highlightText(note.title, searchKeyword)}</h3>
        <p className="note-item__date" data-testid="note-item-date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body" data-testid="note-item-body">{highlightText(note.body, searchKeyword)}</p>
      </div>
      <div className="note-item__action" data-testid="note-item-action">
        <NoteActionButton variant="delete" onClick={() => onDelete(note.id)}>Delete</NoteActionButton>
        <NoteActionButton variant="archive" onClick={() => onArchive(note.id)}>{note.archived ? 'Pindahkan' : 'Arsipkan'}</NoteActionButton>
      </div>
    </div>
  );
}
export default NoteItem;
