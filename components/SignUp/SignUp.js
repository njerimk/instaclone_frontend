import React from 'react';
import styles from './SignUp.module.css';

const signup = () => {
return (
    <div>
        
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
                <p className={styles.sign_up_info} >Sign up to see photos and videos<br></br> from your friends.</p>
            <div>
                <button className={styles.button}>Continue with Facebook</button>
            </div>

            <div className={styles.separator}> OR </div>
            <input className={styles.formInput}type="text" placeholder="Email"></input>
            <br></br>
            <br></br>
            <input className={styles.formInput} type="text" placeholder="Full Name"></input>
            <br></br>
            <br></br>
            <input className={styles.formInput}type="text" placeholder="Username"></input>
            <br></br>
            <br></br>
            <input className={styles.formInput} type="text" placeholder="Password"></input>
            <br></br>
            <br></br>
            <button className={styles.button}>Sign up</button>
                <p className={styles.forgot_text}>Forgot password?</p>
                <div className={styles.sign_up_text}>By signing up you agree to our  </div>
                <div className={styles.sign_up}>Terms &#38; Private Polices</div>
        </div>
    


    </div>
    )
}

export default signup