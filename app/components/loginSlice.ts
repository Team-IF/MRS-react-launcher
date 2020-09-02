// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import mclogin from './auth';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function BtnLogin(event) {
  const id = document.getElementById('idbox').value;
  const passbox = document.getElementById('passbox');
  const password = passbox.value;
  if (!id || !password) {
    return;
  }
  mclogin
    .login(id, password)
    // eslint-disable-next-line promise/always-return
    .then((res) => {
      const { checked } = document.getElementById('loginsave');
      storage.setLoginInfo(
        res.data.accessToken,
        res.data.clientToken,
        res.data.selectedProfile.name,
        res.data.selectedProfile.id,
        checked
      );
      this.$router.push('launcher');
    })
    .catch((error) => {
      if (error.response.status === 403) {
        document.getElementById('ErrorSpan').textContent =
          error.response.data.errorMessage;
        passbox.select();
      }
    });
}
export function EnterPass(event) {
  if (event.code === 'Enter') {
    this.BtnLogin(event);
  }
}
export function TogglePass(event) {
  const passbox = document.getElementById('passbox');
  passbox.classList.toggle('active');
  if (passbox.classList.contains('active')) {
    this.eyeshape = 'eye';
    passbox.setAttribute('type', 'text');
  } else {
    this.eyeshape = 'eye-slash';
    passbox.setAttribute('type', 'password');
  }
}
