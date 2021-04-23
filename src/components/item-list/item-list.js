import React from 'react';

const ItemList = (props) => {
  const {data, onItemSelected, children: renderLabel} = props;
  const items =  data.map((item) => {
      const {id} = item;
      const label = renderLabel(item);
      return (
        <li
        className="list-group-item list-group-item-action"
        key={id}
        onClick={() => onItemSelected(id)}
        >
          {label}
        </li>
      )
    })

  return (
    <ul className="list-group container">
      {items}
    </ul>
    )
}

export default ItemList;