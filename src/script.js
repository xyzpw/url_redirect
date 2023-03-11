const urlParams = new window.URLSearchParams(window.location.search);

if (urlParams.get("url") != null){
    let redirect_uri = window.atob(urlParams.get("url"));
    window.location.replace(redirect_uri);
}

document.addEventListener("keydown", (k) => {
    if (k.key == 'Enter') {
        document.getElementById("btn").click();
    }
});

function hide_url(){
    const url = document.getElementById("url").value;
    let uri_value = window.btoa(url);
    let new_uri = `${document.URL}?url=${uri_value}`
    document.getElementById("output").innerText = `output ${new_uri}`;
}
