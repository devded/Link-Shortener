function urlShort(long_url) {
    const api_key = 'a54ee10c4381830ff49168c7c3e0d45ca0da5';
    fetch('https://cutt.ly/api/api.php?key=' + api_key + '&short=' + long_url)
        .then(response => response.json())
        .then(data => setValue(data.url.shortLink));
}

function getValue() {
    let long_url = document.querySelector("#long_url").value;
    urlShort(long_url);
}

document.querySelector("#shorten").addEventListener("click",getValue);

function setValue(shorten_url){
    document.querySelector("#shorten_url").value = shorten_url;
}

function copy() {
    let CopyText = document.querySelector("#shorten_url");
    CopyText.select();
    document.execCommand("copy");
}
document.querySelector("#copy_url").addEventListener("click", copy);