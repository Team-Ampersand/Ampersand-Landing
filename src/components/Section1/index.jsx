import { DownArrow } from '../../../public/assets';
import * as S from './style';

export default function Section1() {
  return (
    <S.Section1Container>
      <img src="/assets/images/Section1Img.png" />
      <S.Title>즐겁게 몰입하고 함께 성장합니다.</S.Title>
      <S.Description>Team &mpersand를 소개합니다!</S.Description>
      <DownArrow />
    </S.Section1Container>
  );
}
