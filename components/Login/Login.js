import React from 'react';
import styles from './Login.module.css';

const login = () => {

    return (
        <div className={styles.login_page}>
            <div className={styles.login_bar}>
                <ul className={styles.login_nav}>
                    <li>Login</li>
                    <li id={styles.cancel_nav}>Cancel</li>
                </ul>
            </div>

            <div>
                ...
                English ▼
            </div>
            <div className={styles.instacloneHeader}>
                <h1>Instaclone</h1>
            </div>
            <div>
                <button className={styles.button}>Continue with Facebook</button>
            </div>

            <div className={styles.separator}> OR </div>
            <input className={styles.formInput}type="text" placeholder="Phone number, email, username"></input>
            <br></br>
            <br></br>
            <input className={styles.formInput} type="text" placeholder="Password"></input>
            <br></br>
            <br></br>
            <button className={styles.button}>Log In</button>
                <p className={styles.forgot_text}>Forgot password?</p>
                <div className={styles.sign_up_text}>Don't have an account? </div>
                <div className={styles.sign_up}>Sign up</div>
        </div>
    )
}

export default login