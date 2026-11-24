import { useState } from "react";
import "./RegisterForm.css";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        console.log ({
            name,
            email,
            password
        });
        //後でAPI接続
    };
    return(
        <div className="register-container">
            <h2>ユーザー登録</h2>

            <form onSubmit = {handleRegister}>
                <input
                type="text"
                placeholder="名前"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <input
                type="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                type="password"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type = "submit">
                    登録
                </button>

            </form>

            </div>

    );
}