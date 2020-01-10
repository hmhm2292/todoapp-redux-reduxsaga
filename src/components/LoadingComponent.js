import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components';

const Height = Dimensions.get('window').height;

const Loading = ({loading}) => {
  return loading ? (
    <LoaderContainer height={Height}>
      <Loader size="large" />
    </LoaderContainer>
  ) : null;
};

export default Loading;

const LoaderContainer = styled.View`
  z-index: 10;
  justify-content: center;
  align-items: center;
  height: ${props => props.height || Height};
`;

const Loader = styled.ActivityIndicator`
  flex-direction: row;
  justify-content: space-around;
`;
