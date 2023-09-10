const BASE_URL = "https://jsonplaceholder.typicode.com";
const loadUsersBtn = document.getElementById("loadUsersBtn");
const loadPostsBtn = document.getElementById("loadPostsBtn");

loadUsersBtn.addEventListener("click", async () => {
    const users = await fetchUsers();
    displayUsers(users);
});

loadPostsBtn.addEventListener("click", async () => {
    const posts = await fetchPosts();
    displayPosts(posts);
});

async function fetchPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = response.json();

        return posts;
    } catch (error) {
        console.log(`Error fetching posts: ${error}`);
    }
}

function displayPosts(posts) {
    postsList.innerHTML = "";
    posts.forEach(({ title, body }) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h4>${title}</h4>
        <p>${body}</p>`;
        postsList.appendChild(li);
    });
}

async function fetchUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const users = response.json();

        return users;
    } catch (error) {
        console.log(`Error fetching users: ${error}`);
    }
}
function displayUsers(users) {
    usersList.innerHTML = "";
    users.forEach(({ name, phone }) => {
        const li = document.createElement("li");
        const phoneFormatted = phone.split(" ")[0];
        li.textContent = name + "   " + phoneFormatted;
        usersList.appendChild(li);
    });
}
// P.S.
let x = 10;
x = 15;
x = true; // значение
x = {}; // ссылка на место в памяти, где хранится сущность
const z = { age: 10 };
// z = 15
z.age = 15;
console.log(z);
const arr = [1, 2, 3, 4, 5];
arr.length = 0;
console.log(arr);
edited;


