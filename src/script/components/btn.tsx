import React from "react";

type StateType = {
};

type propType = {
  onClick: any;
  content: any;
};

interface Menu {
  state: StateType;
  props: propType
}

class Menu extends React.Component {
  render() {
    return (
      <div className="GS_btn" onClick={this.props.onClick}>
        {this.props.content}
      </div>
    );
  }
}

export default Menu;
