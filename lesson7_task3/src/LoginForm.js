import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {

  constructor(){
    super();
    this.state = {
        nickname: '',
        password: '',
        display: 'block'
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
            display: 'none'
        });
      }
  }

  render(){
    return (
        <div className="LoginForm" display={this.state.display}>
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
    );
  }
}

export default LoginForm;