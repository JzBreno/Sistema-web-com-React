
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useContext, useState } from 'react';
import 'primeicons/primeicons.css';
import { useForm } from 'react-hook-form';
import { Context } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
        
        

const Login = () => {

    // eslint-disable-next-line no-unused-vars
    const [mostrarSenha, setMostrarSenha] = useState(false);
    // eslint-disable-next-line no-empty-pattern, no-unused-vars
    const {register, handleSubmit} = useForm();
    const {setLogado} = useContext(Context);
    const navigate = useNavigate();

    function logar(dados){
        if (dados.email == "josebrenosousa@gmail.com" && dados.senha == "shippudem"){
            setLogado(true);
            navigate('/home');

        }
    }
    return (  
        <>
            
            <div className='bg-primary-500 h-screen flex align-items-center justify-content-center px-3' >
                
                <form onSubmit={handleSubmit(logar)} className='col-12 mmd: col-3 surface-0 p-3 border-round-md '>
                    <h1 className='text-center'>Login</h1>
                    <h3 className='text-center'>Seja Bem Vindo!</h3>
                    <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
                    <InputText 
                        id="email" 
                        type="email" 
                        placeholder='email@email.com'
                        className='mb-3 w-full'
                        {
                            ...register('email',{required:true})
                        }
                    />

                    <label htmlFor="senha" className='block uppercase font-bold text-sm mb-1'>Senha</label>

                    <IconField>
                    
                        <InputText
                            id='senha' 
                            type={mostrarSenha ? 'text' : 'password'}
                            placeholder='********'
                            className='mb-3 w-full'
                            {
                                ...register('senha', {required:true})
                            }
                            
                        />
                        <InputIcon className={`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                         onClick={() => setMostrarSenha(!mostrarSenha)}>
                        </InputIcon>

                    </IconField>
                    <Button className='w-full' label="Entrar" type='submit'/>
                    
                </form>
                
            </div>
        </>
    );
}
 
export default Login;