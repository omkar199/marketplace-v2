import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { CloseLogo } from '../ConnectModal/ConnectModal.style'

import { Fade } from '@mui/material'
import VelvetLogo from '@/assets/svg/VelvetLogo.svg'
import Cross from '../assets/cross.svg'

import { InnerContainer, TransactionA, TransactionP, TransationDiv } from './transactionModal.style'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: '#FFFFFF',
  border: '1px solid #FCFCFC',
  borderRadius: '20px',
  boxShadow: 24,
  p: 2,
}
const backdropStyles = {
  backgroundColor: '#7E77DD',
  opacity: 0.5,
}

export default function TransactionModal({
  isTransactionModalVisible,
  transactionHas,
  setIsTransactionModalVisible,
}: any) {
  const closeModal = async () => {
    setIsTransactionModalVisible(false)
  }
  return (
    <div>
      <Modal
        open={isTransactionModalVisible}
        onClose={closeModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        BackdropProps={{
          style: backdropStyles,
        }}
      >
        <Fade in={isTransactionModalVisible}>
          <Box sx={style}>
            <CloseLogo onClick={closeModal} src={Cross} alt='cross' />
            <InnerContainer>
              <TransationDiv>
                <TransactionP>Transation Hash</TransactionP>
                <TransactionA href={`https://bscscan.com/tx/${transactionHas}`} target='_blaknk'>
                  {transactionHas}
                </TransactionA>
              </TransationDiv>
            </InnerContainer>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
