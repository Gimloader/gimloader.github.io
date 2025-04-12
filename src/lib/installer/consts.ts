export const isFirefox = typeof navigator === "undefined" ? null : navigator.userAgent.includes("Firefox");

export const algorithm: HmacKeyGenParams = {
    name: "HMAC",
    hash: { name: "SHA-512" }
};