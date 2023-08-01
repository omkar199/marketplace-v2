import styled from 'styled-components'

export const ProcessInnerContainer = styled.div`
  width: 420px;
`
export const ConnectContainer = styled.div`
  margin-top: 20px;
  width: 550px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`
export const Logo = styled.img`
  width: 48px;
`
export const CloseLogo = styled.img`
  position: absolute;
  cursor: pointer;
  right: 1rem;
  width: 20px;
  height: 20px;
`
export const ProgressMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  position: relative;
`
export const LogoDiv = styled.div`
  z-index: 1;
  background-color: #ffffff;
  margin-top: 35px;
`
export const LogoImg = styled.img`
  width: 75px;
  border: 1px solid #f1f0fa;
  border-radius: 50%;
  padding: 10px;
`
export const SpinnerDiv = styled.div`
  z-index: 1;
`
export const HorizontalLine = styled.hr`
  width: 100%;
  position: absolute;
  border: 1px solid #f1f0fa;
`
export const HeadingProcess = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #564dd0;
  margin: 2rem auto;
`
export const SubHeadingProcess = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #261047;
  margin: 2rem auto;
`
export const SuccessErrorImg = styled.img`
  position: absolute;
  z-index: 1;
  left: 42%;
  top: 28%;
`
export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const AddTokenBtn = styled.button`
  background: #ffffff;
  box-shadow: 0px 0px 3px #7e77dd;
  border-radius: 25px;
  border: none;
  width: 285px;
  height: 40px;
  margin: 1rem auto;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;

  color: #564dd0;
`
export const BackToFundBtn = styled.button`
  background: #7e77dd;
  border-radius: 10px;
  border: none;
  width: 285px;
  height: 40px;
  color: #ffffffff;
  margin: auto;
`
export const SubHeadingError = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #261047;
  margin: auto;
  margin-bottom: 1rem;
`
export const Tx = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  text-decoration: none;
  color: #7678b5;
  margin: 1rem;
`
export const BnbPrice = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #262626;
`
export const UsdConversiom = styled.p`
  height: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #7678b5;
`
export const CrossImgWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`
