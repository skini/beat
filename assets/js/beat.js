//Authors 
//Nancy Wong <nancypwong@gmail.com>
//Janita Chalam <janitachalam@gmail.com>
//Shloka Kini <srk@shlokakini.com>

var songs_yt_links = ["https://www.youtube.com/embed/watch?v=jSXiNdTbTA4",
		"https://www.youtube.com/embed/watch?v=uYsq7fbRbvk",
		"https://www.youtube.com/embed/watch?v=2uVHNib1uzE",
		"https://www.youtube.com/embed/watch?v=KNmpIA_bLcE",
		"https://www.youtube.com/embed/watch?v=LlvUepMa31o",
		"https://www.youtube.com/embed/watch?v=sfTa_NLiXRU",
		"https://www.youtube.com/embed/watch?v=wZcNacuLSGQ",
		"https://www.youtube.com/embed/watch?v=2eq6l9P8Wf0",
		"https://www.youtube.com/embed/watch?v=nfQJRtf0kr4", 
		"https://www.youtube.com/embed/watch?v=EZfDUdGWRhQ"];


var talks_poems_links = ["https://www.youtube.com/embed/watch?v=LkK2fwZfVjA", 
"https://www.youtube.com/embed/watch?v=cWPx9UyEdYw", 
"https://www.youtube.com/embed/watch?v=B3wsSdPzAuQ", 
"https://www.youtube.com/embed/watch?v=H_8y0WLm78U", 
"https://www.youtube.com/embed/watch?v=hg3umXU_qWc", 
"https://www.youtube.com/embed/watch?v=6X9nRnKshCM", 
"https://www.youtube.com/embed/watch?v=0kKh1es5vBQ", 
"https://www.youtube.com/embed/watch?v=Ks-_Mh1QhMc", 
"https://www.youtube.com/embed/watch?v=V-bjOJzB7LY", 
"https://www.youtube.com/embed/watch?v=LBSUTPftN9E"];

		console.log(songs_yt_links);
		console.log(talks_poems_links);

		function generateSong(){

			var index = getRandomInt(0,10);
			var index2 = getRandomInt(0,10);
			var songURL = songs_yt_links[index];
			var poemURL = talks_poems_links[index2];
			var songiFrame = $('.song_iframe');
			var poemiFrame = $('.poem_iframe');
			songiFrame.load(songURL+'?autoplay=1');
			poemiFrame.load(poemURL+'?autoplay=1');
		}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}