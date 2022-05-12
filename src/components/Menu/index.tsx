import styles from './stylesMenu.module.css';
import Logo from '../../assets/logo.svg'

export default function Menu() {
    const itemMenu = [
        {
            name: 'Como fazer'
        },
        {
            name: 'Ofertas'
        },
        {
            name: 'Depoimentos'
        },
        {
            name: 'Vídeos'
        },
        {
            name: 'Meu Carrinho'
        }
    ]

    function Separador() {
        return (
            <span className={styles.separador}>
                /
            </span>
        )
    }

    return (
        <header >
            <nav className={styles.container}>
                <img src={Logo} alt="logo da página" />
                <div>
                    {
                        itemMenu.map((item, index) => (
                            <span key={index} className={styles.itemMenu}>
                                <a href="" className={styles.textoMenu}>
                                    {item.name}
                                    {
                                        item.name === 'Meu Carrinho' ?
                                            ` `
                                            :
                                            <Separador />
                                    }
                                </a>
                            </span>
                        ))
                    }

                </div>
            </nav>
        </header>
    )
}
