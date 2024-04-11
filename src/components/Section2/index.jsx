import * as S from './style';

export default function Section2() {
  return (
    <S.Container>
      <S.Content>
        <S.Text>
          <h2>
            Team &mpersand를
            <br />
            소개합니다 ‍✨
          </h2>
          <span>
            &mpersand는 광주소프트웨어마이스터고등학교
            <br />
            기숙사 관리 서비스 DOTORI 개발팀 입니다.
            <br />
            GSM 3기부터 시작되어 지금까지 앰퍼샌드의 새로운
            <br />
            역사들을 써내려가고 있습니다.
          </span>
        </S.Text>
        <img src="/assets/images/AmpersandLogo.png" />
      </S.Content>
    </S.Container>
  );
}
