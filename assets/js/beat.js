//Authors 
//Nancy Wong <nancypwong@gmail.com>
//Janita Chalam <janitachalam@gmail.com>
//Shloka Kini <srk@shlokakini.com>

// DATA
var songs_yt_links = ["https://www.youtube.com/embed/jSXiNdTbTA4",
		"https://www.youtube.com/embed/uYsq7fbRbvk",
		"https://www.youtube.com/embed/2uVHNib1uzE",
		"https://www.youtube.com/embed/KNmpIA_bLcE",
		"https://www.youtube.com/embed/LlvUepMa31o",
		"https://www.youtube.com/embed/sfTa_NLiXRU",
		"https://www.youtube.com/embed/wZcNacuLSGQ",
		"https://www.youtube.com/embed/2eq6l9P8Wf0",
		"https://www.youtube.com/embed/nfQJRtf0kr4",
        "https://www.youtube.com/embed/2BtUVKYxfI8",
		"https://www.youtube.com/embed/EZfDUdGWRhQ"];


var talks_poems_links = ["https://www.youtube.com/embed/LkK2fwZfVjA", 
"https://www.youtube.com/embed/cWPx9UyEdYw", 
"https://www.youtube.com/embed/B3wsSdPzAuQ", 
"https://www.youtube.com/embed/H_8y0WLm78U", 
"https://www.youtube.com/embed/hg3umXU_qWc", 
"https://www.youtube.com/embed/6X9nRnKshCM", 
"https://www.youtube.com/embed/0kKh1es5vBQ", 
"https://www.youtube.com/embed/Ks-_Mh1QhMc", 
"https://www.youtube.com/embed/V-bjOJzB7LY", 
"https://www.youtube.com/embed/LBSUTPftN9E"];

var tags = [
    'love',
    'friendship',
    'joy',
    'surprise',
    'trust',
    'envy',
    'fear',
    'anger',
    'sadness',
    'pity',
    'disgust',
    ];

console.log(songs_yt_links);
console.log(talks_poems_links);

// FUNCTIONS
function generateSong(){

    var index = getRandomInt(0,songs_yt_links.length);
    var index2 = getRandomInt(0,talks_poems_links.length);
    var songURL = songs_yt_links[index];
    var poemURL = talks_poems_links[index2];
    var songiFrame = $('.song_iframe');
    var poemiFrame = $('.poem_iframe');
    $(".song_iframe").attr('src', songURL+'?autoplay=1');
    $(".poem_iframe").attr('src', poemURL+'?autoplay=1');
}

toggleTag = function(id) {
    var $tag = $('#' + id);
    $tag.toggleClass('selected deselected');
    console.log('hello?');
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

generateTag = function(tagName) {
    var htmlString = "<input class='btn tag deselected' id='" + tagName + "' type='button' onclick='toggleTag(this.id)' value='" + tagName + "'/>"

    $('.tags').append(htmlString);
}

generateTags = function() {
    for (tag of tags) {
        generateTag(tag);
    }
}

generateTags();
