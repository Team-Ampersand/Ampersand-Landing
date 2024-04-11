import * as S from './style';

const MAJOR_LIST = [
  {
    name: 'Front-end',
    align: 'start',
    memberList: [
      { name: '서주미' },
      { name: '한준' },
      { name: '이운린' },
      { name: '이아론' },
      { name: '정태관' },
      { name: '민우석' },
    ],
  },
  {
    name: 'Back-end',
    align: 'end',
    memberList: [
      { name: '최민욱' },
      { name: '김경수' },
      { name: '김희망' },
      { name: '이예나' },
      { name: '박미리' },
      { name: '권태연' },
    ],
  },
  {
    name: 'iOS',
    align: 'start',
    memberList: [{ name: '정윤서' }],
  },
  {
    name: 'Android',
    align: 'end',
    memberList: [{ name: '정영운' }, { name: '송현서' }],
  },
  {
    name: 'Design',
    align: 'start',
    memberList: [{ name: '김하온' }, { name: '한재형' }],
  },
  {
    name: 'DevOps',
    align: 'end',
    memberList: [{ name: '김원욱' }],
  },
];

export default function Section5() {
  return (
    <S.Container>
      <S.Title>
        함께 성장하는
        <br />
        &mpersand의 팀원들이에요
      </S.Title>
      <S.MajorContainer>
        {MAJOR_LIST.map((major, index) => (
          <S.MajorWrapper align={major.align} key={`major-list-${index}`}>
            <S.MajorDescriptionWrapper>
              <S.MajorTitle>{major.name}</S.MajorTitle>
            </S.MajorDescriptionWrapper>
            <S.MemberContainer align={major.align}>
              {major.memberList.map((member, index) => (
                <S.MemberWrapper key={`member-list-${index}`}>
                  <img
                    src={`/assets/images/members/${member.name}.png`}
                    alt={`${member.name}`}
                  />
                  <span>{member.name}</span>
                </S.MemberWrapper>
              ))}
            </S.MemberContainer>
          </S.MajorWrapper>
        ))}
      </S.MajorContainer>
    </S.Container>
  );
}
