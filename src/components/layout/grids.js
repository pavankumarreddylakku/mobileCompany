import * as React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
  `
const grids = (props) => {
    return (
        <GridWrapper>
            {props.children}
        </GridWrapper>
    )
}

export default grids;