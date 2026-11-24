import { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin =async (e) => {
        e.preventDefault();

        console.log({
            email,
            password
        });
        //後でAPI接続
    };
    return (
        <div className="login-container">
            <h2>ログイン</h2>

            <form onSubmit={handleLogin}>
                <input
                type="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)}
                    />

                    <input
                    type="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)}
                        />

                        <button type="submit">
                            ログイン
                        </button>
                </form>
        </div>
    );
}