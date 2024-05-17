import { Component } from 'react';

class ProfileClass extends Component {
  render() {
    const { name, age, job } = this.props;
    return (
      <>
        <h3>Nome: {name}</h3>
        <h3>Idade: {age}</h3>
        <h3>Profissão: {job}</h3>
      </>
    );
  }
}

export default ProfileClass;
