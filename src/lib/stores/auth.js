import {writable} from "svelte/store";

// First param `preferences` is the local storage key.
// Second param is the initial value.
export const userData = writable('preferences', {
    "refresh": "",
    "token": "",
    "id": 0,
    "email": "",
    "role": 0
})
