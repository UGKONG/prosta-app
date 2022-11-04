import React from 'react';
import Container from '../../components/Container';
import TextPage from '../../components/TextPage';

export default function 프로스타란(): JSX.Element {
  return (
    <Container.Scroll>
      <TextPage.HelloText>{`dono.PROSTA는 특수한 음향 공명 기술을 통하여 전 립선, 골반저근 및 치골미골근의 건강을 유도합니다. 특히 음향 공명 자극 방식은 매우 부드럽지만 에너지는 강합니다. 그리고 일반 진동 방식처럼 진동두드러기*를 유발하지 않습니다.

(*진동두드러기: 사용 간지러운 느낌)
      `}</TextPage.HelloText>

      <TextPage.Image
        width="100%"
        height="400px"
        source={require('../../../assets/images/desc3.png')}
      />

      <TextPage.CommonText>{`
dono.PROSTA는 근조직과 근섬유의 활성화를 유도 하며, 특히 부드러운 공명에너지는 혈액 순환에 크게 도움이 되어 전립선 건강에 도움을 드립니다.
      `}</TextPage.CommonText>
      <TextPage.StrongText>
        Key technology of patented Dono.PROSTA
      </TextPage.StrongText>

      <TextPage.CommonText>{`
Chaos resonanc that muscle tissue likes Prostate stabilization program
Vibrating urticaria prevention system
Tissue and blood vessel strengthening program
      `}</TextPage.CommonText>
      <TextPage.SubText>{`
10-2016-0088154, 10-2020-0038889, 10-2020-0093761, 10-2019-0054643
10-2020-0162406, 10-2021-0192069, 10-2021-0154352, KR-2020 / 010019
      `}</TextPage.SubText>
    </Container.Scroll>
  );
}
