function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three different albums
let album1 = make_album("Adele", "25");
let album2 = make_album("Ed Sheeran", "Divide", 16);
let album3 = make_album("Taylor Swift", "1989");

// Print album information
console.log(album1);
console.log(album2);
console.log(album3);
