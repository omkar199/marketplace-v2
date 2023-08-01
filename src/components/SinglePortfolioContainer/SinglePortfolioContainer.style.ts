import styled from 'styled-components'
interface ButtonProps {
  active: string
}
export const ContainerWrapper = styled.div``

export const BackToDiv = styled.div`
  width: 95%;
  text-align: left;
  margin: 40px auto 20px auto;
  display: flex;
  align-items: center;
  color: #564dd0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const MainContainer = styled.div`
  width: 95%;
  margin: 20px auto;
  border-radius: 20px;
  background: #fcfcfc;
  box-shadow: 0px 0px 5px 0px #d4d1f3;
  padding: 20px;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
`
export const PortfolioName = styled.div`
  display: flex;
`
export const PortfolioNameText = styled.p`
  color: #564dd0;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const PortfolioNameSpan = styled.span`
  color: #564dd0;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 5px;
`
export const HeaderRightContainer = styled.div`
  display: flex;
`
export const ValueReturnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
`
export const ValueReturnHeading = styled.p`
  color: #7678b5;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: auto;
`
export const ValueReturnValue = styled.p`
  color: #564dd0;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
export const InvestBtn = styled.div`
  width: 200px;
  height: 40px;
  border: none;
  color: #ffffff;
  background-color: #7e77dd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const Hr = styled.hr`
  width: 100%;
  border: 0.7px solid #d4d1f3;
`
export const InnerHeading = styled.p`
  color: #261047;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  margin: 25px auto;
`
export const GraphAssetWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`
export const LeftGraphContainer = styled.div`
  width: 60%;
`
export const RightAssetContainer = styled.div`
  width: 35%;
`
export const GraphHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const VaultPerformance = styled.p`
  color: #564dd0;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
export const FilterForDays = styled.ul`
  display: flex;
  padding: 10px;
  background: #f1f0fa;
  border-radius: 5px;
  width: fit-content;
`
export const DaysLi = styled.li<ButtonProps>`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  width: 40px;
  height: 20px;
  color: ${(props) => (props.active ? '#ffffff' : '#7678B5')};
  background: ${(props) => (props.active ? '#7E77DD' : '#ffffff')};
  border-radius: 4px;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  cursor: pointer;
`
export const PortfolioAllocation = styled.div``
export const AllocationHeadingDiv = styled.div`
  color: #564dd0;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  margin-bottom: 30px;
`
export const AssetHeading = styled.div`
  width: 60%;
`
export const WeightHeading = styled.p`
  margin-right: 22px;
  width: 100px;
  text-align: left;
`

export const AllocationDiv = styled.div`
  height: 300px;
  margin-top: 13.4px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #d9d9d9;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #a49ee9;
    border-radius: 10px;
  }
`
export const AllocationDivWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`
export const AssetDetails = styled.div`
  color: #261047;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 60%;
`
export const WeightDetails = styled.p`
  margin-right: 22px;
  width: 100px;
  text-align: left;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const ApyHeading = styled.p`
  margin-right: 22px;
  width: 100px;
  color: #564dd0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const AssetDetailsSpan = styled.span`
  color: #7678b5;
  margin-left: 5px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
export const AssetLogo = styled.img`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
export const GraphContainer = styled.div`
  height: 300px;
  margin-top: 10px;
  margin-bottom: 15px;
`
export const SingleFooterContainer = styled.div`
  display: flex;
  margin-top: 35px;
  height: fit-content;
  border: 2px solid #d4d1f3;
  border-radius: 10px;
`
export const FooterInnerDiv = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  &:not(:last-child) {
    border-right: 2px solid #d4d1f3;
  }
`
export const FooterHeading = styled.p`
  color: #7678b5;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: column;
`
export const FooterBottom = styled.p`
  color: #262626;
  font-weight: 500;
  margin-top: 10px;
  font-size: 16px;
`
export const FooterSpan = styled.span`
  color: #7678b5;

  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
