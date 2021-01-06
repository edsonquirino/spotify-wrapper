// getAlbum
// getAlbums
// getAlbumTracks

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import { getAlbum, getAlbumTracks } from '../src/album';

describe('Album', () => {

    let fetchedStub;
    let promise;

    beforeEach( () => {
        fetchedStub = sinon.stub(global, 'fetch');
        promise = fetchedStub.returnsPromise();
    });

    afterEach ( () => {
        fetchedStub.restore();
    });

    describe('Smoke Tests', () => {

        it('should have getAlbum method', () => {
            expect(getAlbum).to.exist;
        });

        it('should have getAlbumTracks method', () => {
            expect(getAlbumTracks).to.exist;
        });

    });

    describe('Album', () => {
        // verifica se o fetch ocorre
        it('should call fetch method', () => {
            const album = getAlbum();
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const album = getAlbum('ID');
            expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/ID');
        })
        // verificar se o dado é recebido pela promise
        it('should return the correct data from Promise', () => {
            promise.resolves({ album: 'name' });
            const album = getAlbum('ID');
            expect(album.resolveValue).to.be.eql({ album: 'name' });
        });

    });

    describe('Albums', () => {
        // verifica se o fetch ocorre
        it('should call fetch method', () => {
            const albums = getAlbums();
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const albums = getAlbums(['ID1', 'ID2']);
            expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/?ids=ID1,ID2');
        })
        // verificar se o dado é recebido pela promise
        it('should return the correct data from Promise', () => {
            promise.resolves({ album: 'name' });
            const albums = getAlbums(['ID1', 'ID2']);
            expect(albums.resolveValue).to.be.eql({ album: 'name' });
        });

    });

    describe('Album Tracks', () => {
        // verifica se o fetch ocorre
        it('should call fetch method', () => {
            const tracks = getAlbumTracks();
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const tracks = getAlbumTracks('ID');
            expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/ID/tracks');
        })
        // verificar se o dado é recebido pela promise
        it('should return the correct data from Promise', () => {
            promise.resolves({ album: 'name' });
            const tracks = getAlbumTracks('ID');
            expect(album.resolveValue).to.be.eql({ album: 'name' });
        });

    });

});