import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import { get } from '../../../utils/http'
import { HotcateWrap } from "./styledCookbook"
// const data1 = Array.from(new Array(9)).map(() => ({
//     title:"xixi",
//     icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
//   }));
export default class HotCate extends Component {
    state = {
        hotList: []
      }
    
    //   2设置请求
      async componentDidMount() {
        let result = await get({
          url: '/api/hotcate'
        })
        // 2遍历数据
        let data = result.map(value => ({
          key: value.id,
          title: value.title,
          icon: value.img
        }))
        // 3存入state
        this.setState({
            hotList: data
          })
      }
    //   5生成渲染数据
      _renderItem = dataItem => (
        <div className='item'>
          {
            dataItem.icon && <img src={dataItem.icon} alt=""/>
          }
          <span>{dataItem.title}</span>
        </div>
      )
    render() {
        return (
            <HotcateWrap>
            <header>热门分类</header>
            {/* <Grid data={data1}
            columnNum={3}
            hasLine={false}
            renderItem={dataItem => (
                <div className="item">
                    <img src={dataItem.icon} />
                      <span>{dataItem.title}</span>
                </div>
            )}
            /> */}
            {/* 6修改渲染 */}
              <Grid data={this.state.hotList}
                columnNum={3}
                hasLine={false}
                renderItem={this._renderItem}
                />
        </HotcateWrap>
        )
    }
}
