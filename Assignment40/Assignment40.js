// Album: Create objects for music albums.
function albums(artist, title, track) {
    let album = { artist, title };
    if (track) {
        album[`track`] = track;
    }
    return album;
}
console.log(albums("artist 1", "first album", 1));
console.log(albums("artist 2", "second album"));
console.log(albums("artist 3", "third album"));
