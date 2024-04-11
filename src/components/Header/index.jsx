import * as S from './style';

export default function Header() {
  function scrollToSection(selectedValue) {
    const selectedSection = document.querySelector(`.${selectedValue}`);
    selectedSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <S.HeaderContainer>
      <h1>&MPERSAND</h1>
      <ul>
        <li onClick={() => scrollToSection('team-culture')}>팀문화</li>
        <li onClick={() => scrollToSection('core-value')}>인재상</li>
        <li onClick={() => scrollToSection('team-member')}>팀원 소개</li>
      </ul>
    </S.HeaderContainer>
  );
}
