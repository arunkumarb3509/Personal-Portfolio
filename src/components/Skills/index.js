import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const ExperienceBadge = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary + '15'};
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 12px;
  }
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid ${({ theme }) => theme.primary + '33'};
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(37, 99, 235, 0.2) 0px 10px 30px;
    border: 0.1px solid ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 'cc'};
  border: 1px solid ${({ theme }) => theme.border || '#334155'};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease-in-out;
  background: ${({ theme }) => theme.bgLight || '#1E293B'};
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(37, 99, 235, 0.25);
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`

const getCategoryIcon = (title) => {
  if (title === "Frontend") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="60" height="50" style={{ marginBottom: "10px" }}>
        <rect x="40" y="65" width="20" height="10" fill="#334155" rx="2" />
        <rect x="30" y="73" width="40" height="4" fill="#334155" rx="1" />
        <rect x="10" y="5" width="80" height="60" fill="#1E293B" rx="6" stroke="#2563EB" strokeWidth="2" />
        <rect x="14" y="9" width="72" height="8" fill="#334155" rx="2" />
        <circle cx="20" cy="13" r="2" fill="#EF4444" />
        <circle cx="26" cy="13" r="2" fill="#F59E0B" />
        <circle cx="32" cy="13" r="2" fill="#10B981" />
        <path d="M38 30 L28 38 L38 46 M62 30 L72 38 L62 46 M46 48 L54 26" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (title === "Backend") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="60" height="50" style={{ marginBottom: "10px" }}>
        <path d="M70 35 a 15 15 0 0 0 -26 -11 a 12 12 0 0 0 -19 5 a 14 14 0 0 0 3 28 h 42 a 15 15 0 0 0 0 -30 z" fill="#1E293B" opacity="0.6" stroke="#475569" strokeWidth="2" />
        <rect x="15" y="25" width="50" height="14" rx="3" fill="#1E293B" stroke="#7C3AED" strokeWidth="2" />
        <circle cx="23" cy="32" r="3" fill="#10B981" />
        <circle cx="33" cy="32" r="3" fill="#10B981" />
        <line x1="45" y1="32" x2="57" y2="32" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <rect x="15" y="45" width="50" height="14" rx="3" fill="#1E293B" stroke="#7C3AED" strokeWidth="2" />
        <circle cx="23" cy="52" r="3" fill="#10B981" />
        <circle cx="33" cy="52" r="3" fill="#EF4444" />
        <line x1="45" y1="52" x2="57" y2="52" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <path d="M70 42 C 70 38, 88 38, 88 42 L 88 62 C 88 66, 70 66, 70 62 Z" fill="#1E293B" stroke="#2563EB" strokeWidth="2" />
        <ellipse cx="79" cy="42" rx="9" ry="3" fill="#334155" stroke="#2563EB" strokeWidth="2" />
        <path d="M70 49 C 70 53, 88 53, 88 49" fill="none" stroke="#2563EB" strokeWidth="2" />
        <path d="M70 56 C 70 60, 88 60, 88 56" fill="none" stroke="#2563EB" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="60" height="50" style={{ marginBottom: "10px" }}>
      <path d="M35 15 C 35 10, 65 10, 65 15 L 65 30 C 65 35, 35 35, 35 30 Z" fill="#1E293B" stroke="#06B6D4" strokeWidth="2" />
      <ellipse cx="50" cy="15" rx="15" ry="5" fill="#334155" stroke="#06B6D4" strokeWidth="2" />
      <path d="M35 35 C 35 30, 65 30, 65 35 L 65 50 C 65 55, 35 55, 35 50 Z" fill="#1E293B" stroke="#06B6D4" strokeWidth="2" />
      <ellipse cx="50" cy="35" rx="15" ry="5" fill="#334155" stroke="#06B6D4" strokeWidth="2" />
      <path d="M35 55 C 35 50, 65 50, 65 55 L 65 70 C 65 75, 35 75, 35 70 Z" fill="#1E293B" stroke="#06B6D4" strokeWidth="2" />
      <ellipse cx="50" cy="55" rx="15" ry="5" fill="#334155" stroke="#06B6D4" strokeWidth="2" />
      <circle cx="20" cy="20" r="3" fill="#10B981" />
      <circle cx="20" cy="40" r="3" fill="#10B981" />
      <circle cx="20" cy="60" r="3" fill="#10B981" />
      <line x1="20" y1="20" x2="20" y2="60" stroke="#475569" strokeWidth="1.5" strokeDasharray="3" />
    </svg>
  );
};

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <ExperienceBadge>3+ Years Experience</ExperienceBadge>
        <Title>Skills</Title>
        <Desc>Here are some of my technical skills on which I have been working for the past 3+ years.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              {getCategoryIcon(skill.title)}
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills