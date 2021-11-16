import {AxiosError} from "axios";

export class Notifications {


    showText(text: string) {
        alert(text)
    }

    error(error: string | AxiosError) {

        let text = ''

        if (typeof error !== "string" && error?.response && error.response.data.message) {
            text = error.response.data.message
        } else {
            if (typeof error !== "string") {
                text = error.message
            }
        }
        alert(text)
    }

    confirm(title: string, onSuccess: () => void, onCancel: ()=> void) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm(title)) {
            onSuccess();
        } else {
            onCancel();
        }
    }
}
