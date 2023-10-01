import React, { useEffect, useState } from "react";

interface IUser {
    id: number;
    name: string;
    username: string;
}

interface IAdress {
    city: string;
}

interface IUserDetails {
    id: number;
    name: string;
    userName: string;
    email: string;
    address: IAdress;
    phone: string;
    company: {
        name: string;
    };
}

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [userDetales, setUserDetails] = useState<IUserDetails | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    const handeleUserClick = async (usrId: number): Promise<void> => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/users/${usrId}`
        );
        const data = await res.json();

        setUserDetails(data);
    };

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map(({ id, name, username }) => (
                    <li
                        key={id}
                        style={{ border: "1px solid black", width: "30%" }}
                        onClick={() => handeleUserClick(id)}
                    >
                        <p>a. {name}</p>
                        <p>b. {username}</p>
                    </li>
                ))}
            </ul>
            <h1>User Detailes</h1>
            {userDetales && (
                <div>
                    <p>Email: {userDetales.email}</p>
                    <p>Address: {userDetales.address.city}</p>
                    <p>Phone: {userDetales.phone.split(' ')[0]}</p>
                    <p>Company name: {userDetales.company.name}</p>
                </div>
            )}
        </div>
    );
};

export default Users;
