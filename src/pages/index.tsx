import { Input } from '../components/Input';
import { BsEnvelope, BsLock } from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      <Input type="text" id='iEmail' icon={BsEnvelope} labelText='Endereço de Email' isRequired/>
      <Input type="password" id='iSenha' icon={BsLock} labelText='Senha'/>
    </>
  );
}