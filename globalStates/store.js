import { atom } from "jotai";

export const selectedPickerValue = atom('select');
export const atomCats = atom([])
export const atomSearchedCats = atom([])
export const searchBarVisibility = atom(false)
export const atomSearchInput = atom(undefined)