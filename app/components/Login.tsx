import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { EnterPass, TogglePass, BtnLogin } from './loginSlice';
import styles from './loginstyle.css';

export default function Login(): JSX.Element {
  return (
    <div>
      <div id="bg" />
      <div className={styles.centerBox}>
        <div id="head-box">
          <div id="logocircle">
            <img src="../static/img/logo.png" alt="" />
          </div>
          <span id="ErrorSpan" />
        </div>
        <div id="login-box">
          <div id="id-box">
            <input
              id="idbox"
              name="id"
              placeholder="e-mail"
              size={24}
              type="text"
            />
          </div>
          <div id="pass-box">
            <input
              onKeyUp={EnterPass}
              id="passbox"
              name="password"
              placeholder="password"
              size={24}
              type="password"
            />
            <FontAwesomeIcon icon={faEye} onClick={TogglePass} id="eye" />
          </div>
          <input
            checked
            id="loginsave"
            name="saveinfo"
            type="checkbox"
            value="로그인 정보 저장"
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="loginsave" id="savelabel">
            Save Login
          </label>
        </div>
        <div id="footer-box">
          <button id="btnLogin" type="button" onClick={BtnLogin}>
            <img src="loginbutton" alt="" id="imgLogin" />
          </button>
        </div>
      </div>
    </div>
  );
}
