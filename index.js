let sign = "aries"
const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    console.log(json);
});

const hello = "Hello world"

console.log(hello)