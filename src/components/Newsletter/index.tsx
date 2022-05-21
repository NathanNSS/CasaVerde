import { useEffect, useState } from 'react';
// import { MdOutlineEmail } from 'react-icons/md'
import { Container, IconEmail, InputEmail, BtnEmail } from './stylesNewsletter';


export default function AssinaturaNewsletter() {
    const [email, setEmail] = useState('')
    const [valEmail, setValEmail] = useState<boolean>(false)

    async function submitNewsletter(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (valEmail) {
            try {
                const config = {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Authorization": `Basic ${btoa(import.meta.env.VITE_APP_TOKEN)}`
                    },
                    body: JSON.stringify({
                        msg: `Olá, ${email.split('@')[0]}. Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.Até logo!`,
                        to: email
                    })

                }
                const res = await fetch('http://localhost:3333/sendEmail', config)
                window.alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`)
            } catch (error) {
                console.log(error)
            }
        } else {
            window.alert(`E-mail ${email} e inválido !!`)
        }
    }

    useEffect(() => {
        function validaEmail() {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
        email.length > 0 ?  setValEmail(validaEmail) : setValEmail(false)
    }, [email])

    return (
        <div >
            <Container onSubmit={submitNewsletter}>
                <IconEmail color={email.length > 0 ? valEmail ? 'green' : 'red' : "#bcbcbc"} size={50} />
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
