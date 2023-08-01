import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  width: 95%;
  margin: 20px auto;
  align-items: center;
  justify-content: space-between;
`
export const ImageDiv = styled.figcaption`
  position: absolute;
  left: 0;
`
export const NavMain = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const Ul = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: 100px 100px;
  background: #f1f0fa;
  height: 50px;
  width: 575px;
  padding-right: 5px;
`
export const Li = styled.li<{ isActive: boolean }>`
  border-radius: 25px;
  background: ${({ isActive }) =>
    isActive ? 'linear-gradient(0deg, #7e77dd 0%, #564dd0 100%)' : '#f1f0fa'};
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: ${({ isActive }) => (isActive ? '#ffffff' : '#7678B5')};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ReferFriendImgDiv = styled.div`
  margin: auto 2rem;
  cursor: pointer;
`

export const UserDetailsDiv = styled.div`
  display: flex;
  margin-left: auto;
`
export const DetailsInnerDiv = styled.div`
  width: 150px;
  margin-top: 5px;
`

export const DetailsHeading = styled.p`
  color: #7678b5;
  text-align: left;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
export const DetailsValue = styled.p`
  color: #564dd0;
  text-align: left;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
export const ConnectBtn = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 25px;
  background: linear-gradient(0deg, #7e77dd 0%, #564dd0 100%);
  color: #ffffff;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`
