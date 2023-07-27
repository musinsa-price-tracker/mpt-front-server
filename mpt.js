function create_mpt_login_btn(socialLoginType, call_back_func){
    var btn = document.createElement("button");
    btn.className = 'mpt-social-login-btn';
    btn.className += ' mpt-' + socialLoginType.toLowerCase()+'-btn';
    btn.onclick = function() {
        window.open("http://mpt-api-server.com/login/"+socialLoginType);
        window.addEventListener("message", call_back_func, false);
    };
    return btn;
}