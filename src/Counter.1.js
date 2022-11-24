import { useState } from "react";

export function Counter() {
    let [like, setLike] = useState(10);
    let [dislike, setDislike] = useState(10);
    return (
        <div>
            <button onClick={() => setLike(like + 1)}>👍{like} </button>
            {/* like++;
               console.log("The like value: ", like); */}
            <button onClick={() => setDislike(dislike + 1)}>🤞{dislike} </button>



        </div>
    );
}
