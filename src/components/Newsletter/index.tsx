import { useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md'
import styles from './stylesNewsletter.module.css'

export default function AssinaturaNewsletter() {
    const [email, setEmail] = useState('')
    return (
        <div >
            <form className={styles.container}>
                <MdOutlineEmail color='#bcbcbc' size={50} className={styles.iconInput}/>
                <input 
                    type="email"
                    placeholder="Insira seu e-mail"
                    onChange={e => setEmail(e.target.value)}
                    className={styles.inputEmail}
                />
                <button className={styles.btnEmail}>
                    Assinar Newletter
                </button>
            </form>
        </div>
    );
}