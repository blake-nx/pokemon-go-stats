import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll'}}>
      {props.children}
    </div>
  );
};

export default Scroll;