interface TypeColor {
  infoBgColor?: string
  infoColor?: string
  errorBgColor?: string
  errorColor?: string
  successBgColor?: string
  successColor?: string
  warningBgColor?: string
  warningColor?: string
}

interface ToastOptions {
  typeColor?: TypeColor
  duration?: number
}

export type RequiredOptions = Required<ToastOptions>
export type PartialOptions = Partial<ToastOptions>
export interface SingleOption {
  color?: string
  bgColor?: string
  duration?: number
}
export type MessageType  = 'error' | 'success' | 'info' | 'warning'
