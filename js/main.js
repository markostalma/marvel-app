let character = document.getElementById("characters");
let xml = new XMLHttpRequest();
let txt = "";
let ts = Date.now();
let privateKey = config.SECRET_KEY;
let publicKey = config.MY_KEY;
let hash = md5(ts + privateKey + publicKey);

var nameSearch = "";

xml.onreadystatechange = function () {
    if (xml.readyState === 4 && xml.status === 200) {
        displayData(xml);
        bookmark();
    }
}

xml.open("GET", "https://gateway.marvel.com:443/v1/public/characters?limit=12&ts=" + ts + "&apikey="+publicKey+"&hash=" + hash);

xml.send(ts, hash, privateKey, publicKey);

console.log(hash);
console.log(xml);
console.log(xml.status);

// Display Data from Marvel API
function displayData(xml) {
    var marvel = xml.response;
    // console.log(typeof marvel);
    var trueData = JSON.parse(marvel);
    // console.log(trueData.data);
    for (var i = 0; i < trueData.data.results.length; i++) {
        txt += '<div class="col-lg-3 col-sm-6 col-xs-12" id="item"><img class="img-fluid rounded" src="' + trueData.data.results[i].thumbnail.path + '/standard_fantastic.jpg"><div class="row"><div class="col-lg-8"><p class="marvel">' + trueData.data.results[i].name + '</p></div><div class="col-lg-4"><img class="unbookmarked" src="img/unbookmarked.svg"></div></div></div>';
    }
    character.innerHTML = txt;
}

// Bookmark character
function bookmark() {
    var btn = document.getElementsByClassName("unbookmarked");
    var saveName = document.getElementsByClassName("marvel")[i];
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            var source = this.getAttribute("src");
            console.log(source);
            if (source == "img/unbookmarked.svg") {
                this.src = "img/bookmarked.svg";
                localStorage.setItem("name" + i++, this.saveName);
            } else if (source == "img/bookmarked.svg") {
                this.src = "img/unbookmarked.svg";
                localStorage.clear(this.saveName);
            }
        });
    }
}