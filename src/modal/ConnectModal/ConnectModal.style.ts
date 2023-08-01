import styled from 'styled-components'

export const ConnectContainer = styled.div`
  margin-top: 20px;
  width: 550px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CloseLogo = styled.img`
  position: absolute;
  cursor: pointer;
  right: 1rem;
  width: 20px;
  height: 20px;
`
export const ConnectModalTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  margin: 20px 0;
  color: #564dd0;
`
export const ConnectBtnDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  justify-self: center;
  margin: 20px auto;
`
export const ConnectBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ConnectBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 60px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 0px 5px #7e77dd;
  border-radius: 9px;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 5px;
`
export const ConnectText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  width: 75px;

  text-align: center;
  color: #564dd0;
`
export const CreateWalletDiv = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
`
export const CreateWalletInput = styled.input`
  width: 100%;
  height: 50px;
  color: #7678b5;
  border: 1px solid #d4d1f3;
  border-radius: 5px;
  padding: 10px 100px 10px 20px;
  line-height: 1;
  box-sizing: border-box;
  outline: none;
  background-color: #fff;
`
export const CheckDiv = styled.div`
  position: absolute;
  top: 0;
  right: -5px;
`

export const FooterText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin: 20px 0;
  color: #b3b3b3;
`
export const MagicImgWrapper = styled.div`
  margin: 10px auto;
`
export const CloseWrapper = styled.div`
  width: 25px;
  margin-left: auto;
  cursor: pointer;
`
