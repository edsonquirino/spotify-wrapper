/* global fetch */

import { API_URL } from '../config';
import { toJSON } from '../utils';

export const search = (query, type) => 
    fetch(`${API_URL}/search?q=${query}&type=${type}`).then(toJSON);

export const searchAlbums = () =>
    search(query, 'artist');

export const searchArtists = () =>
    search(query, 'album');

export const searchTracks = () =>
    search(query, 'track');

export const searchPlaylists = () =>
    search(query, 'playlist');