import './toast.css'

import type {
  PartialOptions,
  RequiredOptions,
  SingleOption,
  MessageType,
} from './ToastType'

function getIcon(type: MessageType, size: number) {
  switch (type) {
    case 'info':
      return `<svg t="1706352827061" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5252" width="${size}" height="${size}"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m36.571429 341.333333h-73.142858v292.571428h73.142858V438.857143z m0-121.904762h-73.142858v73.142857h73.142858v-73.142857z" p-id="5253" fill="currentColor"></path></svg>`
    case 'success':
      return `<svg t="1706352864705" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6223" width="${size}" height="${size}"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m193.194667 218.331428L447.21981 581.315048l-103.936-107.812572-52.662858 50.761143 156.379429 162.230857 310.662095-319.683047-52.467809-50.956191z" p-id="6224" fill="currentColor"></path></svg>`
    case 'warning':
      return `<svg t="1706352900701" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7203" width="${size}" height="${size}"><path d="M901 757.3L582.5 184.5c-15.4-27.7-43-41.5-70.5-41.5-27.6 0-55.2 13.8-70.5 41.5L123 757.3c-29.9 53.8 9 119.9 70.5 119.9h636.9c61.6 0.1 100.5-66.1 70.6-119.9zM479 370.6c0-18.2 14.8-33 33-33s33 14.8 33 33v220.8c0 18.2-14.8 33-33 33s-33-14.8-33-33V370.6zM512 766c-23.5 0-42.5-19-42.5-42.5s19-42.5 42.5-42.5 42.5 19 42.5 42.5-19 42.5-42.5 42.5z" fill="currentColor" p-id="7204"></path></svg>`
    case 'error':
      return `<svg t="1706347999579" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4224" width="${size}" height="${size}"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m129.29219 233.447619l-129.267809 129.29219-129.316571-129.29219-51.736381 51.736381 129.316571 129.267809-129.316571 129.316571 51.736381 51.736381L512 563.687619l129.29219 129.316571 51.736381-51.73638L563.687619 512l129.316571-129.29219-51.73638-51.736381z" p-id="4225" fill="currentColor"></path></svg>`
  }
}

class Toast {
  #options: RequiredOptions = {
    duration: 3000,
    typeColor: {
      infoColor: '#fff',
      successColor: '#fff',
      warningColor: '#fff',
      errorColor: '#fff',
      infoBgColor: '#409eff',
      successBgColor: '#67c23a',
      warningBgColor: '#e6a23c',
      errorBgColor: '#f56c6c',
    },
  }
  #toastList: string[] = []
  #offsetTop: number = 20
  constructor(options: PartialOptions = {}) {
    if (options.duration) {
      this.#options.duration = options.duration
    }
    if (options.typeColor) {
      if (options.typeColor.errorBgColor) {
        this.#options.typeColor.errorBgColor = options.typeColor.errorBgColor
      }
      if (options.typeColor.warningBgColor) {
        this.#options.typeColor.warningBgColor =
          options.typeColor.warningBgColor
      }
      if (options.typeColor.successBgColor) {
        this.#options.typeColor.successBgColor =
          options.typeColor.successBgColor
      }
      if (options.typeColor.infoBgColor) {
        this.#options.typeColor.infoBgColor = options.typeColor.infoBgColor
      }
      if (options.typeColor.errorColor) {
        this.#options.typeColor.errorColor = options.typeColor.errorColor
      }
      if (options.typeColor.warningColor) {
        this.#options.typeColor.warningColor = options.typeColor.warningColor
      }
      if (options.typeColor.successColor) {
        this.#options.typeColor.successColor = options.typeColor.successColor
      }
      if (options.typeColor.infoColor) {
        this.#options.typeColor.infoColor = options.typeColor.infoColor
      }
    }
  }
  #showMessage(message: string, type: MessageType, option: SingleOption = {}) {
    let duration = option.duration || (this.#options.duration as number)
    let color =
      option.color || (this.#options.typeColor[`${type}Color`] as string)
    let bgColor =
      option.bgColor || (this.#options.typeColor[`${type}BgColor`] as string)
    let id = this.#createMessage(type, message, color, bgColor)
    this.#toastList.push(id)
    this.#removeMessage(id, duration)
  }
  #createMessage(
    type: MessageType,
    message: string,
    color: string,
    bgColor: string
  ) {
    const msgDom = document.createElement('div')
    const id = `--${this.#toastList.length}-${new Date().getTime()}`
    msgDom.id = id
    msgDom.style.position = 'fixed'
    msgDom.style.zIndex = '2147483647'
    msgDom.style.top = `${this.#offsetTop}px`
    msgDom.style.left = '50%'
    msgDom.style.padding = '12px 18px'
    msgDom.style.borderRadius = '3px'
    msgDom.style.fontSize = '14px'
    msgDom.style.color = color
    msgDom.style.backgroundColor = bgColor
    msgDom.classList.add('fade-in')
    msgDom.style.transition = 'all 0.3s'
    msgDom.style.opacity = '1'
    msgDom.style.display = 'flex'
    msgDom.style.alignItems = 'flex-start'
    msgDom.style.gap = '6px'
    msgDom.innerHTML = getIcon(type, 20)
    const text = document.createTextNode(message)
    msgDom.appendChild(text)
    document.body.appendChild(msgDom)
    return id
  }
  #removeMessage(id: string, duration: number) {
    const msgDom = document.getElementById(id) as HTMLDivElement
    const gap = msgDom.offsetHeight + 20
    this.#offsetTop += gap
    const _this = this
    setTimeout(() => {
      msgDom.addEventListener('animationend', function () {
        this.remove()
        _this.#toastList = _this.#toastList.filter((item) => item !== id)
        _this.#toastList.forEach((item) => {
          const itemDom = document.getElementById(item) as HTMLDivElement
          const top = Number(itemDom.style.top.replace(/[^0-9]/g, '')) - gap
          itemDom.style.top = `${top}px`
        })
        _this.#offsetTop -= gap
      })
      msgDom.classList.remove('fade-in')
      msgDom.classList.add('fade-out')
    }, duration)
  }
  info(message: string, option: SingleOption = {}) {
    this.#showMessage(message, 'info', option)
  }
  success(message: string, option: SingleOption = {}) {
    this.#showMessage(message, 'success', option)
  }
  error(message: string, option: SingleOption = {}) {
    this.#showMessage(message, 'error', option)
  }
  warn(message: string, option: SingleOption = {}) {
    this.#showMessage(message, 'warning', option)
  }
}

export default Toast
