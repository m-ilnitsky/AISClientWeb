import React, { Component } from 'react';
import './LoginForm.css';
import './LoginPage.css';

class LoginForm extends Component {

  constructor(){
    super();
    this.state = {
        nickname: '',
        password: '',
        showLoginForm: true
    };
  }

  onChangeNickname(e){
    this.setState({nickname: e.target.value});
  }

  onChangePassword(e){
    this.setState({password: e.target.value});
  }

  onSubmit(){
      var name = this.state.nickname.trim();
      if(name !== '' && this.state.password !== ''){
        this.setState({
            nickname: name,
            showLoginForm: false
        });
      }
  }

  render(){
    if(this.state.showLoginForm == true){
        return (
            <div className="LoginPage" >
                <div className="LoginPage__Body">
                    <div className="LoginPage__Vertical">
                        <div className="LoginPage__Horizontal">
                            <div className="LoginForm">
                                <form className="LoginForm__Form">
                                    <label className="LoginForm__NicknameLabel" htmlFor="LoginForm__Nickname">Имя:</label>
                                    <input className="LoginForm__Nickname" id="LoginForm__Nickname" type="text" 
                                        onChange={(e)=>{this.onChangeNickname(e)}}
                                        value={this.state.nickname}
                                    />
                                    <label className="LoginForm__PasswordLabel" htmlFor="LoginForm__Password">Пароль:</label>
                                    <input className="LoginForm__Password" id="LoginForm__Password" type="password" 
                                        onChange={(e)=>{this.onChangePassword(e)}}
                                        value={this.state.password}
                                    />
                                    <input className="LoginForm__Submit" type="button" value="Войти"
                                        onClick={(e)=>{this.onSubmit(e)}}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return null;
    }
  }
}

export default LoginForm;