import React from "react";
import data from './testData';
import Info from './info';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <nav>
        {data.data.map((item) =>
          <Info
            name={item.name}
            key={item.id}
          />
        )}
      </nav>
    )
  }

}

export default Navigation
