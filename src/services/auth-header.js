export default function authHeader() {
    const token = JSON.parse(localStorage.getItem('jwt_token'));
  
    //add condition for user logged or not
    if (token) {
      return { Authorization: 'Bearer ' + token };
    } else {
      return {};
    }
}