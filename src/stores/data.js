import { writable } from 'svelte/store';

let stored = sessionStorage.getItem('flags');
let flags = JSON.parse(stored);

export let data = writable(flags);