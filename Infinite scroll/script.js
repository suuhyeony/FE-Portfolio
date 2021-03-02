const container = document.querySelector('.container');

getPosts();
getPosts();
getPosts();

async function getPosts () {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomNr()}`);
    const postData = await postResponse.json();

    // console.log(postResponse);
    // console.log(postData);

    const userResponse = await fetch('https://randomuser.me/api');
    const userData = await userResponse.json();

    console.log(userData);

    const data = { post: postData, user: userData.results[0]};
    printData(data);
}

function getRandomNr() {
    return Math.floor(Math.random() * 100) + 1;
}

function printData(data) {
    const postContainer = document.createElement('div');
    postContainer.classList.add('posts-container');
    postContainer.innerHTML = `
        <h2 class="title">${data.post.title}</h2>
        <p class="text">${data.post.body}</p>
        <div class="user-info">
            <img src="${data.user.picture.large}" alt="${data.user.name.first}">
            <span>${data.user.name.last}</span>
        </div>
    `;
    container.appendChild(postContainer);
}


