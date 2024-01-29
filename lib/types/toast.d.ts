import './toast.css';
import type { PartialOptions, SingleOption } from './ToastType';
declare class Toast {
    #private;
    constructor(options?: PartialOptions);
    info(message: string, option?: SingleOption): void;
    success(message: string, option?: SingleOption): void;
    error(message: string, option?: SingleOption): void;
    warn(message: string, option?: SingleOption): void;
}
export default Toast;
