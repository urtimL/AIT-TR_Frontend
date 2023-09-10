const userList = document.getElementById("userList");
const userDetails = document.getElementById("userDetails");
const BAS_URL = "https://jsonplaceholder.typicode.com";

async function fetchUsers() {
    try {
        const response = await fetch(`${BAS_URL}/users`);
        const users = response.json();

        return users;
    } catch (error) {
        console.log(`Error fetching posts: ${error}`);
    }
}

function displayUsers(users) {
    if (users.length !== 0) {
        users.forEach((user) => {
            const li = document.createElement("li");
            li.textContent = user.name;
            li.addEventListener("click", () => displayUserDetails(user));
            userList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent =
            "Пользователи не найдены: попробуйте повторить позднее";
        userList.appendChild(li); 
    }

}

function displayUserDetails(user) {
    userDetails.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            `;
    userDetails.style.display = "block";
}

const fUsers = fetchUsers();
displayUsers(fUsers);