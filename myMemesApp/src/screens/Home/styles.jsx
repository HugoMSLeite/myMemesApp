import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-align: center;
`;

export const ViewForm = styled.View`
padding: 10px;
align-items: center;
`;

export const TextInput = styled.TextInput`
color: #fff;
width: 80%;
marginTop: 5px;
marginBottom: 5px;
border: 1px solid #ccc;
borderLeftWidth: 0;
borderRightWidth: 0;
borderTopWidth: 0;
`;

export const Button = styled(LinearGradient)`
  width: 150px;
  height: 50px;
  marginTop: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
marginLeft: auto;
`;