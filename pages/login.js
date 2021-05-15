import Login from '../components/Login/Login.js'
import styles from '../styles/login.module.css'

function login() {
    return <div className={styles.loginPage}>
        <Login/>
    </div>
}

export default login