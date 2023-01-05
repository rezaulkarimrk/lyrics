const addData = (name) =>{
    fetch(`https://api.lyrics.ovh/suggest/${name}`)
    .then(res=>res.json())
    .then(data=>{
        const len = (data.data).length

        if(len<=10){
            for(let i=0;  i<len; i++){
                transferData(data.data[i]);
            }
        }
        else{
            for(let i=0;  i<10; i++){
                transferData(data.data[i]);
            }
        }
    })
}
const transferData=(item)=>{
    const maindata = document.getElementById('all-lyrics');
    const createData = document.createElement('div');
    const randid = Math.ceil((Math.random()+1)*10000000);
    createData.innerHTML = `<div class="single-result row align-items-center my-3 p-3">
    <div class="col-md-9">
            <h3 class="lyrics-name">${item.title}</h3>
            <p class="author lead">Album by <span>${item.artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="showLyrics('.class${randid}')" class="btn btn-success">Get Lyrics</button>
        </div>
        <div class="single-lyrics text-center class${randid} ">No lyrics found</div>
    </div>`;    
    maindata.appendChild(createData);
}
const showLyrics = (event) =>{
    document.querySelector(event).style.display = 'block';
}




document.getElementById('src-btn')?.addEventListener('click', ()=>{
    const songsName = document.getElementById('input-songs-name').value;
    if(songsName !=''){
        const maindata = document.getElementById('all-lyrics');
        while(maindata.firstChild){
            maindata.removeChild(maindata.lastChild);
        }
        addData(songsName);
    }
    
})



