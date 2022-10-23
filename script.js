const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("result");
const sound = document.getElementById("sound");


function GetWord(){
    let inWord = document.getElementById("inputword").value;
    console.log(inWord)
    fetch(`${url}${inWord}`)
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    result.innerHTML = `
    <div class="wordtitle mt-4 p-4 shadow">
                            <div class="d-flex justify-content-between">
                            <h2>${inWord}</h2>
                            <button class="btn btn-primary" onclick="soundPlay()">
                            <i class="fas fa-volume-up"></i></button>
                        </div>
                        </div>
                            <div class="noun mt-3 p-4">
                            <h6 class="sectitle">${data[0].meanings[0].partOfSpeech}</h6>
                            <p>${data[0].meanings[0].definitions[0].definition}</p>
                            </div>
                            <div class="noun mt-3 p-4">
                            <h6 class="sectitle">${data[0].meanings[1].partOfSpeech}</h6>
                            <p>${data[0].meanings[1].definitions[0].definition}</p>
                            </div>

    `;
    
    sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
});
}

function soundPlay(){
    sound.play();
}