import Header from '../../components/Header';
import Builder from './Builder';

export default function BuilderPage(): JSX.Element {
  return (
    <div className='bg-slate-100 h-screen flex flex-col overflow-hidden'>
      <Header />
      <Builder />
    </div>
  );
}
