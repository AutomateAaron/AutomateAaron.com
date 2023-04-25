import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let storedSubscribed = 'false';
if (browser) {
	storedSubscribed = localStorage.getItem('subscribed') || 'false';
}

export const subscribed = writable(storedSubscribed === 'true');

if (browser) {
	subscribed.subscribe((value) => localStorage.setItem('subscribed', value.toString()));
}
