async function CheckLogin() {
    var isLogin=false;
    const token = window.localStorage.getItem('token');
   
    if(token!=null) {
        const data = await fetch('http://mpt-api-server.com/access_token_info', {
            headers: {
                Authorization: 'Bearer '+token
            }
        }).then(res => res.json())
          .then((res) => {
            
            window.localStorage.setItem('status', res['status']);
            window.localStorage.setItem('token', res['token']);
            window.localStorage.setItem('email', res['email']);
            window.localStorage.setItem('platform', res['platform']);
            
            if(res['status']!='Verify Fail :Invaild Token') isLogin=true;
          });
    }
    return isLogin;
}