import { useEffect, useState } from 'react';
// import { MdOutlineEmail } from 'react-icons/md'
import {Container,IconEmail,InputEmail,BtnEmail} from './stylesNewsletter';

export default function AssinaturaNewsletter() {
    const [email, setEmail] = useState('')
    const [valEmail, setValEmail] = useState<boolean>(false)

    function submitNewsletter(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(valEmail){
            window.alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email} `)
        } else{
            window.alert(`E-mail ${email} e inválido !!`)
        }
    }

    useEffect(() => {
        function validaEmail() {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        if(email.length > 0){
            setValEmail(validaEmail)
        }else{
            setValEmail(false)
        }

    }, [email])

    return (
        <div >
            <Container onSubmit={submitNewsletter}>
                <IconEmail color={email.length > 0 ? valEmail ? 'green':'red' : "#bcbcbc"}  size={50} />
                <InputEmail
                    type="email"
                    required
                    placeholder="Insira seu e-mail"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <BtnEmail type='submit' valido={email.length > 0 ? valEmail : true}>
                    Assinar Newletter
                </BtnEmail>
            </Container>
        </div>
    );
}