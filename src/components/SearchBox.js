import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba br3 b--purple w-50 b--dashed'
        type='search'
        placeholder='search pokemon'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;