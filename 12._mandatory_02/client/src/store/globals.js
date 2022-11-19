import { readable, writable } from "svelte/store";

export const global_user = writable(null);

export const BASE_URL = readable("http://localhost:8080");