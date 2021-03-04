const container = document.querySelector('.container');
const loading = document.querySelector('.loading');

getPosts();
getPosts();
getPosts();


// 포스트 불러오기
async function getPosts () {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomNr()}`);
    const postData = await postResponse.json();

    // console.log(postResponse);
    // console.log(postData);

    const userResponse = await fetch('https://randomuser.me/api');
    const userData = await userResponse.json();

    // console.log(userData);

    const data = { post: postData, user: userData.results[0]};
    printData(data);
}


// id 랜덤으로 불러오기 (1-100)
function getRandomNr() {
    return Math.floor(Math.random() * 100) + 1;
}


// scroll 이벤트
window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    console.log({scrollTop, scrollHeight, clientHeight});
    if (clientHeight + scrollTop >= scrollHeight - 5) {
        showLoading();
    }
})


// loading animation
function showLoading() {
    loading.classList.add('show');
    setTimeout(getPosts, 1000);
}


// DOM에 데이터 넣기
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
    loading.classList.remove('show');
}


