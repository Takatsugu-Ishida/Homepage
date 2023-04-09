// SoundCloud API Key
SC.initialize({
	client_id: 'YOUR_CLIENT_ID_HERE',
});

// Track ID of the SoundCloud track you want to play
var trackId = 'YOUR_TRACK_ID_HERE';

// Get the SoundCloud track information and update the player
SC.get('/tracks/' + trackId).then(function(track) {
	var player = document.querySelector('.soundcloud-player iframe');
	player.src = 'https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/' + track.id + '&amp;auto_play=true&amp;buying=false&amp;liking=false&amp;download=false&amp;sharing=false&amp;show_artwork=false&amp;show_comments=false&amp;show_playcount=false&amp;show_user=false&amp;hide_related=true&amp;visual=false&amp;color=333333&amp;inverse=false&amp;show_bpm=false';
});
