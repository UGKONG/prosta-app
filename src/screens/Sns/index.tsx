import React, {useRef} from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components/native';
import Container from '../../components/Container';
import TextPage from '../../components/TextPage';

export default function SNS둘러보기(): JSX.Element {
  type SnsBtnList = {name: string; top: number; left: number; url: string};
  const snsBtnList = useRef<SnsBtnList[]>([
    {
      name: 'naverBlog',
      top: 10,
      left: 88,
      url: 'https://blog.naver.com/donomedical',
    },
    {
      name: 'facebook',
      top: 10,
      left: 236,
      url: 'https://www.facebook.com/profile.php?id=100085282237689',
    },
    {
      name: 'instagram',
      top: 136,
      left: 276,
      url: 'https://www.instagram.com/dono.medical',
    },
    {
      name: 'youtube',
      top: 210,
      left: 170,
      url: 'https://www.youtube.com/channel/UChuWSXzGHqOghcSdLPeRXdQ',
    },
    {
      name: 'kakaoStory',
      top: 130,
      left: 57,
      url: 'https://pf.kakao.com/_xhxkdVxj',
    },
  ]);

  return (
    <Container.Scroll>
      <TextPage.CommonText>
        {`
dono.PROSTA의 사용 만으로도 건강한 전립선의 기대가 가능합니다만, 보다 적극적인 건강을 위하여 앉는 방법의 다양화 그리고 식음료, 생활습관의 정돈이 중요합니다.

3년이 넘는 개발과 시험과정에서 dono.PROSTA의 기술진들은 생명의 신비로움에 대하여 경탄과 찬사가 끊이질 않았습니다. 아직도 밝혀 지지 않은 인체의 신비스러움은 가득합니다. 그 중에 생식기능은 더더욱 그러합니다. 그래서 dono.PROSTA의 생각은 어느 특정 기관의 건강을 바라보기 보다는 주변 전체의 건강을 아우르는 것이 바람직하다고 봅니다.

dono.PROSTA는 미세진동의 공명에너지로 불수의 근 육에 해당되는 전립선 및 치골미골근, 골반저근 등의 전체 건강을 도모합니다.

dono.MEDI와 함께 심리적, 정신적 그리고 사회적 안녕을 맞이하면 평온하고 건강하게 삶의 질이 향상되시리라 기대 해 봅니다.

      `}
      </TextPage.CommonText>
      <ImageContainer>
        <TextPage.Image
          source={require('../../../assets/images/snsGroup.png')}
          width="280px"
          height="280px"
        />
        {snsBtnList?.current?.map(item => (
          <SnsBtn
            key={item?.name}
            onPress={() => Linking.openURL(item?.url)}
            style={{top: item?.top, left: item?.left}}
          />
        ))}
      </ImageContainer>
    </Container.Scroll>
  );
}

const ImageContainer = styled.View`
  width: 100%;
  position: relative;
  margin-bottom: 100px;
`;
const SnsBtn = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  position: absolute;
`;
