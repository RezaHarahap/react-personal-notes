import React from 'react';

function NoteSearch({ keyword, onSearch }) {
  return (
    <div className="note-search" data-testid="note-search">
      <h2>Cari catatan</h2>
      <input
        type="search"
        placeholder="Cari berdasarkan judul atau isi ..."
        value={keyword}
        onChange={(event) => onSearch(event.target.value)}
        data-testid="note-search-input"
      />
    </div>
  );
}

export default NoteSearch;
