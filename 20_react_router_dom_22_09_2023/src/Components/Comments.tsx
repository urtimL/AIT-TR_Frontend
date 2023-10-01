import React, { useEffect, useState } from 'react'

interface IComment {
    postId: number;
    id: number;
    email: string;
    body: string;
}

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((data) => setComments(data));
    }, []);

    return (
        <div>
            <h1>Comments List</h1>
            <ul>
                {comments.map(({ body, id, email, postId }) => (
                    <li
                        key={id}
                        style={{ border: "1px solid black", width: "30%" }}
                    >
                        <p>id: {id}</p>
                        <p>id комментария: {postId}</p>
                        <p>email: {email}</p>
                        <p>Текст комментария: {body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments
