import styled from 'styled-components'

export const PortfolioContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  margin: 35px 0;
`

export const PortfolioContainerHeaderTitle = styled.h2`
  color: #564dd0;
  font-weight: 500;
  font-size: 21px;
`

export const PortfolioContainerButtonBar = styled.div`
  background: #f1f0fa;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
`

export const PortfolioContainerButton = styled.div<{ isActive: boolean }>`
  background: ${({ isActive }) => (isActive ? '#7e77dd' : '#f1f0fa')};
  border-radius: 20px;
  overflow: hidden;
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#7678B5')};
  font-weight: ${({ isActive }) => (isActive ? '500' : '400')};
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;

  a {
    display: inline-block;
    padding: 12.5px 30px;
    text-decoration: none;
    color: ${({ isActive }) => (isActive ? '#ffffff' : '#7678B5')};
  }
`

export const PortfolioCardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  width: 100%;
  flex-wrap: wrap;
`
