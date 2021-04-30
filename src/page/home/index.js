import React, { Component } from 'react'
import './index.less'
import WxImageViewer from 'react-wx-images-viewer';
import { Carousel } from 'antd-mobile'
export default class index extends Component {
  state = {
    isopen: false,
    index: 0,
    id:null,
    arr:[],
    list: [
      {
        id: 1,
        title: "无所谓",
        images: [
          'https://img0.baidu.com/it/u=4104416656,1918533939&fm=26&fmt=auto&gp=0.jpg',
          'https://img2.baidu.com/it/u=2406312982,3119990222&fm=26&fmt=auto&gp=0.jpg',
          'https://img0.baidu.com/it/u=820286820,233399883&fm=26&fmt=auto&gp=0.jpg'
        ]
      },
      {
        id: 2,
        title: "有所谓",
        images: [
          'https://img2.baidu.com/it/u=119446843,1314572743&fm=26&fmt=auto&gp=0.jpg',
          'https://img0.baidu.com/it/u=1486179073,3957335412&fm=26&fmt=auto&gp=0.jpg',
          'https://img2.baidu.com/it/u=3359788367,1910068342&fm=26&fmt=auto&gp=0.jpg'
        ]
      },
      {
        id: 3,
        title: "都有无所谓",
        images: [
          'https://img2.baidu.com/it/u=4143761142,947848443&fm=26&fmt=auto&gp=0.jpg',
          'https://img0.baidu.com/it/u=316734475,1392193370&fm=26&fmt=auto&gp=0.jpg',
          'https://img1.baidu.com/it/u=3943179606,126421912&fm=26&fmt=auto&gp=0.jpg'
        ]
      }
    ]
  }

  onClose = () => {
    this.setState({
      isOpen: false
    })
  }

  openViewer=(index,id)=>{
    const{list}=this.state
    this.setState({
      arr:list.filter(x=>{return x.id===id}).map(y=>{return y.images})[0],
      id,
      index,
      isOpen: true
    })
  }
  render() {
    const { index, isOpen, list ,arr} = this.state
    return (
      <div className="home">
        {
          list.map(item => {
            return <div key={item.id}>
              <Carousel
                infinite={true}>
                {
                  item.images.map((elem, index) => {
                    return <img key={index} src={elem} alt={index} onClick={this.openViewer.bind(this,index,item.id)} width="100%" height="200px" />
                  })
                }
              </Carousel>
              {
                isOpen ? <WxImageViewer onClose={this.onClose} urls={arr} index={index} /> : ""
              }
              <div className="footer"><span>{item.id}</span>---<span>{item.title}</span></div>
            </div>
          })
        }
      </div>
    )
  }
}
