import hashjs from 'hash.js';

export function getHash(value) {
    const hash = hashjs.sha1().update(value).digest('hex');

    return hash;
}