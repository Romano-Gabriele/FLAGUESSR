import { writable } from 'svelte/store';

let stored = localStorage.getItem('flags');
let flags = JSON.parse(stored);

export let data = writable(flags);