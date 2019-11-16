class SubFramePlantFood extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        name: "plant-food",
        ct_name: "肥料",
        desc: "說明欄"
      },
      {
        name: "plant-food",
        ct_name: "道具2",
        desc: "說明欄"
      },
      {
        name: "plant-food",
        ct_name: "道具3",
        desc: "說明欄"
      },
      {
        name: "plant-food",
        ct_name: "道具4",
        desc: "說明欄"
      }
    ];
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  select(itemName) {
    console.log('select: ', itemName);
    this.props.changeMouseState(itemName);
    this.close();
  }
  close(e) {
    if (e) e.stopPropagation();
    this.props.clickHandler();
  }
  renderItem() {
    var itemsDom = []
      for (let item of this.items) {
        itemsDom.push(<div 
          className={'item '+item.name}
          onClick={()=>{this.select(item.name)}}
          >{item.ct_name}</div>)
      }

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        肥料-子畫面-道具說明 
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}

