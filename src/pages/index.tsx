import { Input } from '../components/Input';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      <Input id='iEmail' icon={faEnvelope} placeholder='Email'/>
    </>
  );
}
