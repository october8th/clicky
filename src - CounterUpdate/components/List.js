import React from "react";

const List = props => (
    <ul className="list-group">
      {props.groceries.map(item => (
        <li key={item.id} className="list-group-item">
          {item.name}
        </li>
      ))}
    </ul>
  );

export default List;