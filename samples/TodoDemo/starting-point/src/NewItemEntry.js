import React from 'react';
import PropTypes from 'prop-types';

const NewItemEntry = ({ onNewItem }) => {
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onNewItem && onNewItem(e.target.value);
      e.target.value = '';
    }
  };

  return (
    <label>
      New Item:&nbsp;
      <input type="text" onKeyPress={onKeyPress} />
    </label>
  );
};

NewItemEntry.propTypes = {
  onNewItem: PropTypes.func
};

export default React.memo(NewItemEntry);
