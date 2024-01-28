import ToastClass from './toast'

function logNewWarn() {
  console.warn(`[simple toast][WARNING][${new Date().toLocaleTimeString()}]

您正在尝试多次实例化SpMessage，我们会返回最初的实例，这可能会导致达不到您的使用预期

`)
}

function singleTon(className: typeof ToastClass) {
  let instance: ToastClass | null = null
  return new Proxy(className, {
    construct(target, args) {
      if (instance === null) {
        instance = new target(...args)
      } else {
        logNewWarn()
      }
      return instance
    },
  })
}

const SpMessage = singleTon(ToastClass)
export { SpMessage }
