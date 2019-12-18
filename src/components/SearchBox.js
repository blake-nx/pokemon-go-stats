import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green w-50'
        type='search'
        placeholder='search pokemon'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;