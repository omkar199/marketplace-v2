export function formatAddress(address: any) {
  return `${address.substring(0, 5)}...${address.substring(address.length - 4, address.length)}`
}
