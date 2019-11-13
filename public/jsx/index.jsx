class SubField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 1,
      field_id: this.props.fieldId
    }
    if (this.props.enableState == 'disable') {
      this.state.level = 0
    } 
  }
  fieldImgClass() {
    var fieldImgClassInfo = {
      'level0': 'wasteland',
      'level1': 'weed',
      'level2': 'space'
    };
    var subClass = ' ';
    if (this.state.level < 3) {
      let levelName = 'level'+this.state.level.toString();
      subClass += fieldImgClassInfo[levelName];
    }
    subClass += ' '+this.props.enableState;
    return subClass
  }
  clickField() {
    let newState = {
      field_id: this.state.field_id
    };
    if (this.state.field_id < 12) return;
    if (this.state.level == 2) return;
    let weedingTools = ['grove', 'sickle'];
    if (weedingTools.indexOf(this.props.mouseState) > -1) {
      newState.level = 2
    }
    // newState.level = this.state.level+1;
    this.setState(newState);

    console.log('click field');
  }
  render() {
    return (
      <div 
        className={'sub-field '+this.fieldImgClass()}
        onClick={()=>{this.clickField()}}
      >
      {this.state.level}
        <div className="plant"></div>
      </div>
      
    );
  }
}
class Field extends React.Component {
  constructor(props) {
    super(props)
  }
  renderSubField() {
    let field_list = [];
    for(var i=1;i<=20;i++) {
      let enableSate = '';
      if (i < 12) {
        enableSate = 'disable';
      }
      let dom = <SubField 
        enableState={enableSate} 
        fieldId={i.toString()} 
        mouseState={this.props.mouseState}
      />
      field_list.push(dom);
    }
    return field_list;
  }

  render() {
    return (
      <div className="field">
        {this.renderSubField()}
      </div>
    );
  }
}


class ToolBoxRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        hidden: false,
        hiddenOffset: '',
        arrowIconRotate: 'rotate'
    }
  }
  hiddenHandler(){
    if (this.state.hidden) {
      this.setState({
        hidden: false,
        hiddenOffset: '',
        arrowIconRotate: 'rotate'
      });
    } else {
      this.setState({
        hidden: true,
        hiddenOffset: 'hidden',
        arrowIconRotate: ''
      });
    }
  }

  render() {
    return (
      <div className={'tools-box right '+this.state.hiddenOffset}>
        <div className="tool weeding" onClick={()=>{this.props.clickHandler('Weeding')}}>
          除草
        </div>
        <div className="arrow" onClick={()=>this.hiddenHandler()}>
          <i className={'fas fa-angle-left '+this.state.arrowIconRotate}></i>
        </div>
        <div className="tool seed" onClick={()=>{this.props.clickHandler('Seed')}}>
          播種
        </div>
        <div className="tool water" onClick={()=>{this.props.clickHandler('Water')}}>
          <i className="fas fa-tint"></i>
        </div>
        <div className="tool pest-control" onClick={()=>{this.props.clickHandler('PestControl')}}>
          <i className="fas fa-spider"></i>
        </div>
        <div className="tool plant-food" onClick={()=>{this.props.clickHandler('PlantFood')}}>
          施肥
        </div>
      </div>
    );
  }
}

class ToolBoxLeft extends React.Component {
  render() {
    return (
      <div className="tools-box left">
        <div className="tool harvest" onClick={()=>{this.props.clickHandler('Harvest')}}>
          收成
        </div>
      </div>
    );
  }
}


class SubFrameHarvest extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        收成-子畫面-道具說明 
        </div>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFrameMailBox extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        信箱-子畫面-道具說明 
        </div>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFramePestControl extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        蟲害防治-子畫面-道具說明 
        </div>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFramePlantFood extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        肥料-子畫面-道具說明 
        </div>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFrameSeed extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        種子-子畫面-道具說明 
        </div>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFrameWater extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        澆水-子畫面-道具說明 
        </div>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFrameWeeding extends React.Component {
  constructor(props) {
    super(props)
    this.items = [
      {
        name: "grove",
        ct_name: "手套"
      },
      {
        name: "sickle",
        ct_name: "鐮刀"
      },
      {
        name: "spray",
        ct_name: "生化除草劑"
      }
    ]
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  select(itemName) {
    console.log('select: ', itemName)
    this.props.changeMouseState(itemName)
    this.close()
  }
  close(e) {
    if (e) e.stopPropagation()
    this.props.clickHandler()
  }
  renderItem() {
    var itemsDom = []
      for (let item of this.items) {
        itemsDom.push(<div 
          className={'item '+item.name}
          onClick={()=>{this.select(item.name)}}
          >{item.ct_name}</div>)
      }

      itemsDom.push(<div className="item">未開放</div>)
    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame weeding" id="sub-frame">
        <div className="description">
        除草-子畫面-道具說明 
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class AccountInfo extends React.Component{
  render() {
    return (
      <div className="account-info">
        <div className="level">Lv 1</div>
        <div className="exp">
          <div className="full-exp">
            <div className="real-exp"></div>
          </div>
          <span className="text">xp</span>
        </div>
        <div className="money">$ 100,010</div>
      </div>
    );
  }
}

class Shop extends React.Component{
  render() {
    return (
      <div className="shop">
        <i className="fas fa-store"></i>
      </div>
    );
  }
}
class Weather extends React.Component{
  render() {
    return (
      <div className="weather">
        <i className="fas fa-cloud-moon"></i>
        <span className="temperature-text">25</span>
        <i className="fas fa-temperature-low"></i>
      </div>
    );
  }
}

class MailBox extends React.Component {
  render() {
    return (
      <div className="mail-box" onClick={()=>{this.props.clickHandler('MailBox')}}>
        mail-box
      </div>
    );
  }
}

class MainFrame extends React.Component {
  constructor(props) {
    super(props)
    var defaultFrame = {
      frame: {
        Seed: false,
        Water: false,
        PestControl: false,
        PlantFood: false,
        Weeding: false,
        Harvest: false,
        MailBox: false,
      }
    };
    this.mouseState = {
      mouse: ''
    }
    this.state = Object.assign({}, defaultFrame, this.mouseState)
  }
  openSubFrame(type) {
    var defaultFrame = {
      frame: {
        Seed: false,
        Water: false,
        PestControl: false,
        PlantFood: false,
        Weeding: false,
        Harvest: false,
        MailBox: false,
      }
    }
    defaultFrame.frame[type]=true;
    var newState = Object.assign({}, defaultFrame, this.mouseState)
    this.setState(newState);
  }
  closeSubFrame() {
    var defaultFrame = {
      frame: {
        Seed: false,
        Water: false,
        PestControl: false,
        PlantFood: false,
        Weeding: false,
        Harvest: false,
        MailBox: false,
      }
    }
    var newState = Object.assign({}, defaultFrame, this.mouseState)
    this.setState(newState);
  }
  rendSubFrame() {
    var subframe_list = [];

    if (this.state.frame.Weeding) {
      let subframeWeeding = <SubFrameWeeding 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />
      subframe_list.push(subframeWeeding);
    }

    if (this.state.frame.Seed) {
      let subframeSeed = <SubFrameSeed 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />      
      subframe_list.push(subframeSeed);
    }

    if (this.state.frame.Water) {
      let subframeWater = <SubFrameWater 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />      
      subframe_list.push(subframeWater);
    }

    if (this.state.frame.PestControl) {
      let subframePestControl = <SubFramePestControl 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />      
      subframe_list.push(subframePestControl);
    }

    if (this.state.frame.PlantFood) {
      let subframePlantFood = <SubFramePlantFood 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />      
      subframe_list.push(subframePlantFood);
    }

    if (this.state.frame.Harvest) {
      let subframeHarvest = <SubFrameHarvest 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />      
      subframe_list.push(subframeHarvest);
    }

    if (this.state.frame.MailBox) {
      let subframeMailBox = <SubFrameMailBox 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />      
      subframe_list.push(subframeHarvest);
    }

    return subframe_list
  }
  click_main(e) {
    e.stopPropagation()
    e.preventDefault()
    if (e.button == 0) {
      // mouse left button
    } else if (e.button == 2) {
      // mouse right button
      this.changeMouseState('')
    }
  }
  changeMouseState(mouseState) {
    console.log('main-frame mouseState: ', mouseState)
    var defaultFrame = {
      frame: {
        Seed: false,
        Water: false,
        PestControl: false,
        PlantFood: false,
        Weeding: false,
        Harvest: false,
        MailBox: false,
      }
    };
    this.mouseState = {
      mouse: mouseState
    }
    this.setState(Object.assign({}, defaultFrame, this.mouseState));
  }
  mouseImg() {
    if (this.state.mouse == '') {
      return ''
    } else {
      return 'mouse-'+this.state.mouse
    }
  }
  render() {
    return (
      <div className={'main-frame '+this.mouseImg()} 
          onClick={(e)=>{this.click_main(e)}}
          onContextMenu={(e)=>{this.click_main(e)}}
      >
        <AccountInfo />
        <Shop />
        <Weather />
        <Field mouseState={this.state.mouse}/>
        <div className="fence" hidden>
          <div className="fence-divs">
            <div className="fence-1"></div>
            <div className="fence-2"></div>
            <div className="fence-3"></div>
            <div className="fence-4"></div>
            <div className="fence-5"></div>
            <div className="fence-6"></div>
          </div>
        </div>
        <MailBox clickHandler={(type)=>{this.openSubFrame(type)}} />
        <ToolBoxRight clickHandler={(type)=>{this.openSubFrame(type)}} />
        <ToolBoxLeft clickHandler={(type)=>{this.openSubFrame(type)}} />
        {this.rendSubFrame()}
      </div>
    );
  }
}

ReactDOM.render(
  <MainFrame />, 
  document.body
)