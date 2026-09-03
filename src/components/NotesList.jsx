import React from 'react';
import NoteItem from './NoteItem';

function getGroupKey(createdAt) {
  const date = new Date(createdAt);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function formatGroupHeader(groupKey) {
  const [year, month] = groupKey.split('-').map(Number);
  return new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' })
    .format(new Date(year, month - 1));
}

function NotesList({ notes, onDelete, onArchive, searchKeyword = '', dataTestId = 'notes-list' }) {
  const hasNotes = Array.isArray(notes) && notes.length > 0;

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >Tidak ada catatan</p>
      </div>
    );
  }

  const groupedNotes = notes.reduce((groups, note) => {
    const groupKey = getGroupKey(note.createdAt);
    return { ...groups, [groupKey]: [...(groups[groupKey] || []), note] };
  }, {});

  return (
    <div className="notes-list notes-list--grouped" data-testid={dataTestId}>
      {Object.entries(groupedNotes).map(([groupKey, groupNotes]) => (
        <section key={groupKey} data-testid={`${groupKey}-group`} className="notes-group">
          <div className="notes-group__header">
            <h3 className="notes-group__title">{formatGroupHeader(groupKey)}</h3>
            <span className="notes-group__count" data-testid={`${groupKey}-group-count`}>
              {groupNotes.length} catatan
            </span>
          </div>
          <div className="notes-group__items">
            {groupNotes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
                searchKeyword={searchKeyword}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default NotesList;
