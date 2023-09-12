const BAS_URL = "https://jsonplaceholder.typicode.com";
const usersList = document.getElementById("usersList");
const usersList1 = document.getElementById("usersList1");
const userDetails = document.getElementById("userDetails");
const searchInput = document.getElementById("searchInput");
const users = [];

(async function fetchAndDisplayUsers() {
    try {
        const res = await fetch(`${BAS_URL}/users`);
        const users = await res.json();

        users.forEach((user) => {
            const li = document.createElement("li");
            li.innerText = user.name;
            usersList.appendChild(li);
        });

        let filteredUsers = users;
        displayUsers(users);

        searchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();

            filteredUsers = users.filter((user) =>
                user.name.toLowerCase().includes(searchTerm)
            );

            displayUsers(filteredUsers);
        });
    } catch (error) {
        console.log(error);
    }
})();

function displayUsers(users) {
    usersList1.innerHTML = "";
    users.forEach((user) => {
        const li = document.createElement("li");
        li.innerText = user.name;
        li.addEventListener("click", () => displayUserDetails(user));
        usersList1.appendChild(li);
    });
}

function displayUserDetails(user) {
    userDetails.innerHTML = "";

    const nameHeading = document.createElement("h2");
    nameHeading.innerHTML = user.name;

    const nickName = document.createElement("p");
    nickName.innerHTML = `<strong> User name: </strong> ${user.username}`;

    const email = document.createElement("p");
    email.innerHTML = `<strong> User email: </strong> ${user.email}`;

    const phone = document.createElement("p");
    phone.innerHTML = `<strong> Phone: </strong> ${user.phone}`;

    userDetails.append(nameHeading, nickName, email, phone);
}
