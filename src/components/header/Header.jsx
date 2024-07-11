import React, { useContext } from 'react';
import Navbar from './Navbar';
import styles from './header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/User';
import logoImg from '../../assets/logoImg-removebg-preview.png';
import avatarImg from '../../../public/images/default_avatar.png';

function Header() {
  const { globalUser, logOutHandler } = useContext(UserContext);
  const nav = useNavigate();
  return (
    <header className={styles.header}>
      {globalUser ? (
        <section className={styles.userSection}>
          <img className={styles.profileImg} src={globalUser.profilePicture} />
          <button onClick={logOutHandler} className={styles.authNavBtn}>
            התנתק
          </button>
        </section>
      ) : (
        <section className={styles.userSection}>
          <p>אורח</p>
          <button
            onClick={() => {
              nav('/auth');
            }}
            className={styles.authNavBtn}
          >
            התחבר
          </button>
        </section>
      )}

      <Navbar styles={styles} />
      <img className={styles.logoImg} src={logoImg} alt="logo img" />
    </header>
  );
}

export default Header;
