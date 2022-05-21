import { useEffect, useState } from "react"
import Buscador from "./components/Buscar";
import { Produto } from "./components/CardProduto";
import FiltroValor from "./components/FiltroValor";
import Ordenador, { OpcoesOrdenador } from "./components/Ordenador";
import { Container, ContainerFiltro, Produtos, SubTitle, Title } from "./stylesOfertas";

export interface IOfertas {
    name: string;
    preco: number;
    img: string;
    ordem: number;
    estoque: number;
}

export default function Ofertas() {

    const [ofertas, setOfertas] = useState<IOfertas[]>([])
    const [ofertasFiltrada, setOfertaFiltrada] = useState<IOfertas[]>([])

    const [busca, setBusca] = useState("");

    const [ordenador, setOrdenador] = useState<OpcoesOrdenador>("");

    const [filtro1, setFiltro1] = useState("");
    const [filtro2, setFiltro2] = useState("");

    useEffect(() => {

        function testaBusca(title: string) {
            const regex = new RegExp(busca, "i");
            return regex.test(title);
        }

        function ordenar(novaLista: IOfertas[]) {
            switch (ordenador) {
                case "Nome":
                    return novaLista.sort((a, b) => (a.name > b.name ? 1 : -1));
                case "Preço":
                    return novaLista.sort((a, b) => (a.preco > b.preco ? 1 : -1));
                default:
                    return novaLista;
            }
        }

        function filtro(item: IOfertas) {
            if (filtro1.length <= 0 || filtro2.length <= 0) return item;
            if (item.preco >= Number(filtro1) && item.preco <= Number(filtro2)) {
                return item;
            }
        }

        const novaLista = ofertas.filter(
            (item: IOfertas) => testaBusca(item.name) && filtro(item)
        );

        setOfertaFiltrada(ordenar(novaLista))
    }, [busca, ordenador, filtro1, filtro2])

    useEffect(() => {
        async function buscaOfertas() {
            fetch("http://localhost:3333/ofertas", { method: 'GET', headers: { "Content-type": "application/json; charset=UTF-8" } })
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                    throw res;
                })
                .then(data => { setOfertas(data), setOfertaFiltrada(data) })
                .catch(erro => console.log(erro))
        }
        if (ofertas.length === 0) buscaOfertas()
    })

    return (
        <Container>
            <SubTitle>Conheça nossas</SubTitle>
            <Title>Plantas</Title>
            <ContainerFiltro >
                <Buscador busca={busca} setBusca={setBusca} />
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                <FiltroValor setFiltro1={setFiltro1} setFiltro2={setFiltro2} />
            </ContainerFiltro>
            <Produtos>
                {ofertasFiltrada?.map((oferta, index) => (
                    oferta.estoque > 0 && <Produto produto={oferta} key={index} />
                )
                )}

            </Produtos>
        </Container>
    )
}