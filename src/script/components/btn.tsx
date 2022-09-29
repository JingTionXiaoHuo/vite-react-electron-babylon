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

export default function Menu(props: propType) {

  return (
    <div className="GS_btn" onClick={props.onClick}>
      {props.content}
    </div>
  );
}
