import { writable } from 'svelte/store';

//let stored = localStorage.getItem('flags');
//let flags = stored ? JSON.parse(stored) : [];

//export let data = writable(flags);

export let signUp = writable(false);