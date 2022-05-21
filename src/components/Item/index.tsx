import { Container, ContainerIMG, Texto } from "./stylesItem";

interface Props{
    urlImage:string;
    texto:string
}

export default function Item({texto,urlImage}: Props) {
    return (
        <Container>
            <ContainerIMG>
                <img src={urlImage} alt={texto} />
            </ContainerIMG>
            <Texto>
                {texto}
            </Texto>
        </Container>
    )
}
