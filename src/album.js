/* global fetch */

import { API_URL } from '../config';
import { toJSON } from '../utils';

export const getAlbum = id =>
    fetch(`${API_URL}/albums/${id}`).then(toJSON);

export const getAlbum = ids =>
    fetch(`${API_URL}/albums/?ids=${ids}`).then(toJSON);

export const getAlbumTracks = () => {}
    fetch(`${API_URL}/albums/${id}/tracks`).then(toJSON);