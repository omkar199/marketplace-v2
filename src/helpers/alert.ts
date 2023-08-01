import { enqueueSnackbar } from 'notistack'
export const alertTost = (
  message: string,
  type: 'default' | 'error' | 'success' | 'warning' | 'info',
) => {
  return enqueueSnackbar(message, {
    variant: type,
    autoHideDuration: 3000,
  })
}
