/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components/native';
import Container from '../../components/Container';
import TextPage from '../../components/TextPage';
import Slider from '../../components/Slider';
import {modeList, powerList, timerList} from '../Home/index';
import {
  Row as _Row,
  RowTitle as _RowTitle,
  SliderContainer,
  SliderTextWrap,
  SliderText,
  listStep,
  listFirst,
  listLast,
} from '../Home';
import store from '../../store';

export default function 사용방법(): JSX.Element {
  const remoteState = store(x => x?.remoteState);

  return (
    <Container.Scroll>
      <TextPage.CommonText>
        {`dono.PROSTA는 특수한 음향 공명 기술을 통하여 전 립선, 골반저근 및 치골미골근의 건강을 유도합니다. 특히 음향 공명 자극 방식은 매우 부드럽지만 에너지는 강합니다. 그리고 일반 진동 방식처럼 진동두드러기*를 유발하지 않습니다.
(*진동두드러기: 사용 간지러운 느낌)

dono.PROSTA는 아무때나 사용이 가능하며 1회 사용 시 11분 사용으로 충분합니다. 하지만 필요에 따라 시간 조절이 가능합니다.
(사용 중에 재 설정 가능)
      `}
      </TextPage.CommonText>

      <Row>
        <RowTitle>타이머 (분)</RowTitle>
        <SliderContainer>
          <SliderTouchHelpWrap>
            {timerList?.map((x, i) => (
              <SliderTouchHelp key={i}>
                <SliderText
                  key={x}
                  count={timerList?.length}
                  idx={i}
                  active={Number(x) === timerList[2]}
                  ismargin={x >= 10}>
                  {x}
                </SliderText>
              </SliderTouchHelp>
            ))}
          </SliderTouchHelpWrap>
          <Slider
            step={listStep(timerList)}
            min={listFirst(timerList)}
            max={listLast(timerList)}
            color={'#0B63AB'}
            value={timerList[2]}
            disabled={true}
          />
        </SliderContainer>
      </Row>

      <TextPage.CommonText>{`
몸의 상태에 따라, 기분에 따라 모드와 에너지를 조절하여 색 다른 느낌을 얻을 수 있습니다.
      `}</TextPage.CommonText>

      <Row>
        <RowTitle>모드</RowTitle>
        <SliderContainer>
          <SliderTouchHelpWrap>
            {modeList?.map((x, i) => (
              <SliderTouchHelp key={i}>
                <SliderText
                  key={x}
                  count={modeList?.length}
                  idx={i}
                  active={Number(x) === modeList[3]}
                  ismargin={x >= 10}>
                  {x}
                </SliderText>
              </SliderTouchHelp>
            ))}
          </SliderTouchHelpWrap>
          <Slider
            step={listStep(modeList)}
            min={listFirst(modeList)}
            max={listLast(modeList)}
            color={'#0B63AB'}
            value={modeList[3]}
            disabled={true}
          />
        </SliderContainer>
      </Row>

      <TextPage.CommonText>{`
dono.PROSTA의 에너지 조절은 일반 기계장치의 강도 조절과 비슷한 느낌일 수 있지만, 공명 에너지는 강약을 조잘하는 개염과 다소 다릅니다. 공명에너지는 강하다고 효과가 좋은 것이 아니므로 사용 하시면서 자신에게 맞는 에너지 레벨을 찾아보세요.
      `}</TextPage.CommonText>

      <Row>
        <RowTitle>에너지</RowTitle>
        <SliderContainer>
          <SliderTouchHelpWrap>
            {powerList?.map((x, i) => (
              <SliderTouchHelp key={i}>
                <SliderText
                  key={x}
                  count={powerList?.length}
                  idx={i}
                  active={Number(x) === powerList[1]}
                  ismargin={x >= 10}>
                  {x}
                </SliderText>
              </SliderTouchHelp>
            ))}
          </SliderTouchHelpWrap>
          <Slider
            step={listStep(powerList)}
            min={listFirst(powerList)}
            max={listLast(powerList)}
            color={'#0B63AB'}
            value={powerList[1]}
            disabled={true}
          />
        </SliderContainer>
      </Row>

      <TextPage.CommonText>{`
dono.PROSTA는 작동 11분 후에 자동으로 꺼집니다. 11분이면 충분히 효과를 얻을 수 있기 때문입니다. 조금 더 dono.PROSTA를 즐기고 싶다면 1 회 정도 더 하는 것도 좋습니다. (1일 2회면 충분합니다) dono.- PROSTA 2회 때는 적당히 시간을 줄여서 사용하셔도 좋습니다.

dono.PROSTA 를 사용할 때는 의자 위에 dono.PROS- TA 를 얹어 놓고 그 위에 앉으세요. 앉으실 때, dono.- PROSTA의 원형 공명부분이 전립선 위치에 닿도록 앉으시면 좋습니다.

사용 시 얇은 속옷이나 잠옷을 착용하시면 좋습니다. (두꺼운 속옷은 에너지 전달이 약화 될 수 있습니다)

dono.PROSTA를 스마트폰과 연결 할때는 돌출된 공명 부분 전체에 손바닥을 댑니다. (이때 삐~삐~ 소리가 납니다) 스마트폰에서 dono.PROSTRA 앱을 실행시키 고 블루투스 검색창에서 dono.PROSTA 0000을 찾아서 클릭합니다. (0000은 임의 숫자로서 제품마다
      `}</TextPage.CommonText>
    </Container.Scroll>
  );
}

const Row = styled(_Row)`
  background-color: #98c0e2;
  padding: 20px 10px 40px;
  border-radius: 10px;
  border: 2px solid #fff;
  position: relative;
`;
const RowTitle = styled(_RowTitle)`
  color: #0b63ab;
  white-space: nowrap;
`;
const SliderTouchHelpWrap = styled.View`
  position: absolute;
  width: 100%;
  top: 4px;
  left: 0;
  padding: 0 9px;
  flex-direction: row;
  justify-content: space-between;
`;
const SliderTouchHelp = styled.View`
  min-width: 15px;
  min-height: 15px;
  max-width: 15px;
  max-height: 15px;
  border-radius: 15px;
  background-color: #00000000;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;
