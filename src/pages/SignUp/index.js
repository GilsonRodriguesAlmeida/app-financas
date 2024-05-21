import React, { useContext, useState } from 'react'
import { Platform, ActivityIndicator } from 'react-native';

import { 
    BackgroundColor, 
    Container, 
    Logo, 
    AreaInput, 
    Input,
    SubmitButton,
    SubmitText,    
} from './styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
    const { signUp, loadingAuth } = useContext(AuthContext)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp(){
        if(nome === '' || email === '' || password === '') return;
        signUp(email, password, nome);
    }

    return(
        <BackgroundColor>

            <Container 
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                
                <AreaInput>
                    <Input 
                        placeholder='Seu Nome'
                        value={nome}
                        onChangeText={ (text) => setNome(text) } 
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder='Seu E-mail'
                        value={email}
                        onChangeText={ (text) => setEmail(text) }
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder='Sua Senha'
                        value={password}
                        onChangeText={ (text) => setPassword(text) }
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton  onPress={ handleSignUp }>
                    {
                        loadingAuth ? (
                           <ActivityIndicator size={20} color="#fff" />
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitButton>

            </Container>

        </BackgroundColor>
    )
}
