import { RecycleArrow, Rocket, Team, Twinkle } from '../../../public/assets';
import * as S from './style';

export default function Section3() {
  return (
    <S.Container className="team-culture">
      <S.Content>
        <h2>
          Team &mpersand가
          <br />
          추구하는 문화에요 ‍🎧
        </h2>
        <S.List>
          <S.Item>
            <Rocket />
            <S.ItemContent>
              <h3>즐겁게 몰입하고 함께 성장합니다.</h3>
              <span>
                우리는 더 나은 소프트웨어, 높은 퍼포먼스와 유연한 소프트웨어를
                개발하기 위하여 주어진 상황에서 가장 최선의
                <br /> 선택을 위해 끊임없이 고민하고 여러 상황속 기술적 트레이드
                오프에서 선택의 기준은 익숙한 기술이 아닌 필요한
                <br /> 기술로 초점을 맞춥니다.
              </span>
            </S.ItemContent>
          </S.Item>
          <S.Item>
            <Team />
            <S.ItemContent>
              <h3>관계는 수평적으로, 실행은 수직적으로.</h3>
              <span>
                팀원들끼리의 관계는 수평적입니다. 서로 웃긴 농담을 주고 받기도
                하고 멘토링 활동도 진행하며 편안한 분위기 속<br />의 집단
                분위기를 형성합니다.
              </span>
            </S.ItemContent>
          </S.Item>
          <S.Item>
            <RecycleArrow />
            <S.ItemContent>
              <h3>애자일 소프트웨어 개발 선언을 따릅니다.</h3>
              <span>
                애자일은 소프트웨어를 끊임없이 발전시키고 개선하는데 효과적인
                개발 방법론이에요. 애자일 프레임워크인 스크
                <br />
                럼을 이용해 애자일을 실행하고, 발전시키고 있어요.
              </span>
            </S.ItemContent>
          </S.Item>
          <S.Item>
            <Twinkle />
            <S.ItemContent>
              <h3>극도의 투명함, 정보의 공유화.</h3>
              <span>
                팀 내의 문서와 소식들은 투명하게 공개됩니다. 정보 전달은 집단에
                있어서 가장 중요한 수단입니다. 변화에 유연
                <br />
                하게 대처하는 소프트웨어와 함께 변화에 유연하게 전달되는 정보를
                통해서 팀원들의 업무를 더욱 쉽게 파악할 수<br />
                있도록 합니다.
              </span>
            </S.ItemContent>
          </S.Item>
        </S.List>
      </S.Content>
    </S.Container>
  );
}
