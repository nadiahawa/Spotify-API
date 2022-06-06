

const getAuth = async () => {
    const clientId = '29ec436ab3904eb2ac62058b4e5cbdcd';
    const clientSecret = '2eee41ba144a460089135fc78510bf3c';
    const encodedString = btoa(clientId + ':' + clientSecret)
    const response = await fetch('https://accounts.spotify.com/api/token',
    {
        method: 'POST',
        headers: {
            'Authorization' : `Basic ${encodedString}`,
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    }
    
    );

    let token = await response.json();
    console.log(token);
    return token.access_token
}

const loadToken = async () => {
    const token = await getAuth();
    console.log(token);
    return token

}

const getSong = async () => {
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:bluff+artist:kelela&limit=1`,
    {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    });
    data = await data.json();
    console.log(data);
    console.log(data.tracks.items[0].preview_url);
    let audioobj = new Audio(data.tracks.items[0].preview_url);
    audioobj.play();
}

let playbuttony = document.querySelector('#playbutton1')
playbuttony.addEventListener('click', ()=> {getSong();});


const getSong2 = async () => {
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:out%20getting%20ribs+artist:king%20krule&limit=1`,
    {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    });
    data = await data.json();
    console.log(data);
    console.log(data.tracks.items[0].preview_url);
    let audioobj = new Audio(data.tracks.items[0].preview_url);
    audioobj.play();
}

let playbuttony2 = document.querySelector('#playbutton2')
playbuttony2.addEventListener('click', ()=> {getSong2();});


const getSong3 = async () => {
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:submission+artist:gorillaz&limit=1`,
    {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    });
    data = await data.json();
    console.log(data);
    console.log(data.tracks.items[0].preview_url);
    let audioobj = new Audio(data.tracks.items[0].preview_url);
    audioobj.play();
}

let playbuttony3 = document.querySelector('#playbutton3')
playbuttony3.addEventListener('click', ()=> {getSong3();});




const getSong4 = async () => {
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:voices+artist:flume&limit=1`,
    {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    });
    data = await data.json();
    console.log(data);
    console.log(data.tracks.items[0].preview_url);
    let audioobj = new Audio(data.tracks.items[0].preview_url);
    audioobj.play();
}

let playbuttony4 = document.querySelector('#playbutton4')
playbuttony4.addEventListener('click', ()=> {getSong4();});



const getSong5 = async () => {
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:monkey%20gone%20to%20heaven+artist:pixies&limit=1`,
    {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    });
    data = await data.json();
    console.log(data);
    console.log(data.tracks.items[0].preview_url);
    let audioobj = new Audio(data.tracks.items[0].preview_url);
    audioobj.play();
}

let playbuttony5 = document.querySelector('#playbutton5')
playbuttony5.addEventListener('click', ()=> {getSong5();});



const getSong6 = async () => {
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:444+222+artist:lil%20uzi&limit=1`,
    {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    });
    data = await data.json();
    console.log(data);
    console.log(data.tracks.items[0].preview_url);
    let audioobj = new Audio(data.tracks.items[0].preview_url);
    audioobj.play();
}

let playbuttony6 = document.querySelector('#playbutton6')
playbuttony6.addEventListener('click', ()=> {getSong6();});



const getSong7 = async () => {
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:soda+artist:azealia%20banks&limit=1`,
    {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    });
    data = await data.json();
    console.log(data);
    console.log(data.tracks.items[0].preview_url);
    let audioobj = new Audio(data.tracks.items[0].preview_url);
    audioobj.play();
}

let playbuttony7 = document.querySelector('#playbutton7')
playbuttony7.addEventListener('click', ()=> {getSong7();});





const getSong8 = async () => {
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:wanna+artist:broncho&limit=1`,
    {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    });
    data = await data.json();
    console.log(data);
    console.log(data.tracks.items[0].preview_url);
    let audioobj = new Audio(data.tracks.items[0].preview_url);
    audioobj.play();
}

let playbuttony8 = document.querySelector('#playbutton8')
playbuttony8.addEventListener('click', ()=> {getSong8();});


const getSong9 = async () => {
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:line%20and%20sinker+artist:billy%20talent&limit=1`,
    {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    });
    data = await data.json();
    console.log(data);
    console.log(data.tracks.items[0].preview_url);
    let audioobj = new Audio(data.tracks.items[0].preview_url);
    audioobj.play();
}

let playbuttony9 = document.querySelector('#playbutton9')
playbuttony9.addEventListener('click', ()=> {getSong9();});


//create function to stop the song? POtenrialy reload the page


//creat a function to stop the song?
