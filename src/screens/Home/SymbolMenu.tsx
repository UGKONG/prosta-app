import React, {useState} from 'react';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styled from 'styled-components/native';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
};
export default function 로고메뉴({navigation}: Props) {
  type MenuBtnList = {id: string; name: string; top: number; left: number};
  const [menuBtnList] = useState<MenuBtnList[]>([
    {id: 'question', name: '프로스타?', top: 184, left: -10},
    {id: 'how', name: '사용방법', top: 28, left: 0},
    {id: 'sns', name: 'SNS 둘러보기', top: 26, left: 214},
    {id: 'log', name: '사용로그', top: 254, left: 130},
    {id: 'home', name: 'dono.PROSTA', top: 160, left: 250},
  ]);

  return (
    <Container>
      <SymbolWeb />
      {menuBtnList?.map((item: MenuBtnList) => (
        <MenuBtn
          key={item?.id}
          style={{top: item?.top, left: item?.left}}
          onPress={() => navigation.navigate(item?.id)}
        />
      ))}
    </Container>
  );
}

const Container = styled.View`
  width: 370px;
  height: 350px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SymbolWeb = styled.Image.attrs(() => ({
  source: require('../../../assets/images/mainWeb.png'),
  resizeMode: 'contain',
}))`
  width: 100%;
  max-width: 400px;
  height: 100%;
`;
const MenuBtn = styled.TouchableOpacity`
  background-color: #00000000;
  position: absolute;
  width: 120px;
  height: 60px;
`;
