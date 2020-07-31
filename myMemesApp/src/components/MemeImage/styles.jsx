import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
}))`
  background: #1e222b;
  height: 400px;
`;

export const TextContainer = styled.Text`
    color: #fff;
`;

export const Template = styled.TouchableOpacity`
  width: 250px;
  margin-right: 20px;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
`;