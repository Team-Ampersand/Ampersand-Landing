import * as S from './style';

export default function Section4() {
  return (
    <S.Container>
      <S.Content>
        <h2>
          Team &mpersand가
          <br />
          찾고있는 인재상이에요 🕵🏻
        </h2>
        <S.List>
          <S.Item>
            <h3>
              맡은 일에 대한
              <br />
              책임감이 강한 사람
            </h3>
            <div>💪</div>
          </S.Item>
          <S.Item>
            <h3>
              신기술 도입에 대한
              <br />
              망설임이 없는 사람
            </h3>
            <div>👩🏻‍💻</div>
          </S.Item>
          <S.Item>
            <h3>
              스스로 할 일을 찾고
              <br />
              도움이 되는 사람
            </h3>
            <div>🙋🏻‍♀️</div>
          </S.Item>
          <S.Item>
            <h3>
              목표를 명확히 하고
              <br />
              열심히 공부하는 사람
            </h3>
            <div>📊</div>
          </S.Item>
        </S.List>
      </S.Content>
    </S.Container>
  );
}
