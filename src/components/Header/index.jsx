import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/Michelle-Laignier.png" alt="Foto de perfil" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Michelle Laignier</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}


{/* import {} from 'react-icons/ri' importa o react-icons e a biblioteca que queremos usar*/}
{/* { RiShutDownLine } é o ícone que vamos usar*/}