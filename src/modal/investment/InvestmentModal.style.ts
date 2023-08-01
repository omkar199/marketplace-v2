import styled from 'styled-components'
interface Toggle {
  activeToggle: boolean
}

export const ConnectContainer = styled.div`
  margin-top: 20px;
  width: 570px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SwitchDiv = styled.div`
  border-radius: 10px;
  padding: 7.5px;
  width: 100%;
  margin: 25px auto;
  background-color: #f1f0fa;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const GetBNBBtn = styled.button`
  margin-left: 5px;
  background: #7e77dd;
  border-radius: 10px;
  border: none;
  padding: 5px;
  font-size: 10px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
`

export const InnerSwithDiv = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 50%;
  text-align: center;
  font-size: 21px;
  font-weight: 600;
  font-weight: 500;
  margin-bottom: 0;
  height: 50px;
  border-radius: 10px;
  background-image: ${(props) =>
    props.color ? 'linear-gradient(0deg, #7e77dd 20%, #564dd0)' : 'none'};
  color: ${(props) => (props.color ? '#ffffff' : '#7678b5')};
`
export const InvestmentIcon = styled.img`
  margin: 0 10px;
`

export const BalanceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 10px;
`
export const BalanceValue = styled.p`
  font-size: 12.5px;
  color: #564dd0;
`
export const InvestInputWrap = styled.div`
  display: flex;
  margin: 20px;
`
export const InvestmentInput = styled.input`
  flex-wrap: wrap;
  border: none;
  width: 40px;
  height: 20px;
  margin: auto 10px;
  color: #261047;
  padding: 0 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  background: #ffffff;
  border: 1px solid #d4d1f3;
  border-radius: 5px;
  text-align: right;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #7678b5;
    text-align: right;
  }
`
export const SubmitBtn = styled.button`
  height: 50px !important;
  background-color: #7e77dd;
  width: 100%;
  border: none;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
`
export const InnerContainer = styled.div`
  width: 380px;
  margin-bottom: 2rem;
`
export const HeadDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PercentDiv = styled.div``
export const MaxBtn = styled.button`
  background: #ffffff;
  border: 1px solid #d4d1f3;
  border-radius: 4px;

  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #564dd0;
  width: 40px;
  height: 15px;
  margin-right: 5px;
`
export const Balance = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  color: #564dd0;
`
export const SwapContainer = styled.div`
  position: relative;
`

export const SwapDiv = styled.div`
  background: #f1f0fa;
  border-radius: 5px;
  display: flex;
  margin: 5px 0;
  flex-direction: column;
  justify-content: space-between;
`
export const ValueDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  margin-right: 10px;
`
export const TokenPrice = styled.input`
  height: 20px;
  margin: 5px 0;

  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  background: transparent;
  cursor: text;
  text-align: right;
  border: none;
  color: #262626;
  &:focus {
    outline: none;
  }
`
export const UsdConversionDiv = styled.div`
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const UsdLogo = styled.img`
  width: auto;
  height: 20px;
  margin-right: 5px;
`
export const UsdText = styled.p`
  text-align: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #261047;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 18px;
  height: 50px;
`
export const InnerInfoWrapper = styled.div`
  border: 1px solid #d4d1f3;
  margin: 10px 0;
  border-radius: 5px;
  height: auto;

  /* overflow-y: scroll; */
`
export const InfoWrraper = styled.div<Toggle>`
  transition: all 1s;
  overflow: hidden;
  height: ${(props) => (props.activeToggle ? '170px' : '74px')};
`
export const InfoWrraperDeposit = styled.div<Toggle>`
  transition: all 1s;
  overflow: hidden;
  height: ${(props) => (props.activeToggle ? '130px' : '74px')};
`
export const InnerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  height: 20px;
  transition: all 1s;
`
export const InfoQuestion = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7678b5;
`
export const InfoValue = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #7678b5;
`
export const AdvanceSettingDiv = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #d4d1f3;
  width: auto;
  padding: 5px;

  font-weight: 450;
  font-size: 10px;
  line-height: 14px;
  color: #7678b5;
  transition: all 1s;
  overflow-y: auto;
  border-radius: 0px 0px 5px 5px;
  cursor: pointer;
`

export const DropDownLogo = styled.img`
  width: 10px;
  margin: auto;
  margin-right: 5px;
`

export const GetBNBModalContainer = styled.div<{ show: boolean }>`
  background-color: #fff;
  position: absolute;
  top: 0%;
  left: ${({ show }) => (show ? '95%' : '0%')};
  border-radius: ${({ show }) => (show ? '0 20px 20px 0' : '20px')};
  height: 100%;
  width: 80%;
  padding: 25px 21px 25px 55px;
  z-index: -1;
  transition: all 0.3s;
`

export const GetBNBHeader = styled.h1`
  font-size: 20px;
  margin-top: 25px;
  text-align: center;
  font-weight: bold;
  color: #564dd0;
`

export const GetBNBBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px #7e77dd;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 25px;
  padding: 20px;
`

export const GetBNBBoxHead = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #564dd0;
  margin-bottom: 5px;
`

export const GetBNBBoxPara = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #261047;
`

export const GetBNBBoxDetails = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: #564dd0;
  display: inline;
  margin-left: 5px;
  a {
    text-decoration: none;
    color: #564dd0;
  }
`

export const SettingIcon = styled.img`
  width: 10px;
  margin: 0 5px;
`
export const QuestionIcon = styled.img`
  width: 12px;
  margin: 0 5px;
  object-fit: cover;
`
export const SettingOpenClose = styled.img<Toggle>`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 9px;
  height: 6px;
  transform: ${(props) => (props.activeToggle ? 'rotate(180deg)' : '')};
`

export const MultiTokenBtn = styled.button`
  border-radius: 17px;
  background: #7e77dd;
  border: none;
  color: #ffffff;
  font-size: 10px;
  padding: 5px 10px;
`
export const CloseLogoWraper = styled.div`
  position: absolute;
  cursor: pointer;
  right: 1rem;
  width: 20px;
  height: 20px;
`
