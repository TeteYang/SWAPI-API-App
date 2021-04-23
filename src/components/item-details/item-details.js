import React, {Component} from 'react';

const Record = ({item, fields, label}) => {
  return (
  <div>
    <div>{label}: {item[fields]}</div>
  </div>
  )
}

export {
  Record
}

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  // componentDidMount() {
  //   this.updateItem();
  // }

  updateItem = () => {
    const {getData, itemId, getImg} = this.props;

    getData(itemId)
    .then((item) => this.setState({
      item,
      image: getImg(itemId)
    }));
  }

  render() {
    const {item, image} = this.state;

    if(!item) {
      return <span>Select item from this list</span>
    }
    const {name} = item;

    return(
      <div className="container d-flex mt-2 width: 50%">
      <div>
        <img className="width: 50%" src={image} alt=""/>
      </div>
      <h4 className="mb-2">{name}</h4>
      <div>
        {
          React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {item})
          })
        }
      </div>
    </div>
    )
  }
}