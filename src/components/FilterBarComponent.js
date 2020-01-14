import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

const FilterBarComponent = ({setFilterStatusAction}) => {
  const setFilterStatus = filterStatus => {
    setFilterStatusAction(filterStatus);
  };

  return (
    <Options>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#00ffef', '#60d4cd', '#35b2ff']}
        style={{borderRadius: 10}}>
        <ButtonContainer onPress={() => setFilterStatus('View All')}>
          <Button>View All</Button>
        </ButtonContainer>
      </LinearGradient>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#00ffef', '#60d4cd', '#35b2ff']}
        style={{borderRadius: 10}}>
        <ButtonContainer onPress={() => setFilterStatus('View Completed')}>
          <Button>View Completed</Button>
        </ButtonContainer>
      </LinearGradient>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#00ffef', '#60d4cd', '#35b2ff']}
        style={{borderRadius: 10}}>
        <ButtonContainer onPress={() => setFilterStatus('View Not Completed')}>
          <Button>View Not Completed</Button>
        </ButtonContainer>
      </LinearGradient>
    </Options>
  );
};

export default FilterBarComponent;

const Container = styled.ScrollView``;

const Options = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 10px 0px;
`;

const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 110px;
`;
const Button = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;
