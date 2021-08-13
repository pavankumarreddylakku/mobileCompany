import React,{useState} from 'react';
import styled from 'styled-components';
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
const StyledDiv = styled.div`
      height: 100px;
      width:100px;
      padding: 20px 500px;
      .ant-picker-input{
          width:300px;
      }
      .ant-picker{
          width:300px;
      }
`
const Header = ({onChangeData}) => {

    const onChange = (date, dateString) => {
        console.log(date, dateString);
        onChangeData(date, dateString);
    }
    return(
        <StyledDiv>
            <DatePicker onChange={onChange} format="MM/YYYY" picker="month" style={{width:"400px!important"}}/>
        </StyledDiv>
    );
}
export default Header;