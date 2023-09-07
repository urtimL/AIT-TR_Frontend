const userList = document.getElementById("userList");
const userDetails = document.getElementById("userDetails");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
        users.forEach((user) => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });
    })
    .catch((err) => {
        const li = document.createElement("li");
        li.textContent =
            "Пользователи не найдены: попробуйте повторить позднее";
        userList.appendChild(li);
    })
    .finally(console.log("Финиш"));

userList.addEventListener("click", (e) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => {
            users.forEach((user) => {
                if (e.target.textContent === user.name) {
                    userDetails.innerHTML = `<p>user name: ${user.username}</p>
                    <p>email: ${user.email}</p>
                    <p>phone: ${user.phone}</p>`
                }
            });
        });
});
