import fetch from 'node-fetch'

const URL = 'https://discover-test.melis.io/api/v1/endpoint/stomp'

export async function fetchValue() {
    const res = await fetch(URL)
    return res.json()
}

export type Size = "small" | "medium" | "large";
export default interface Animal {
    size: Size;
}
