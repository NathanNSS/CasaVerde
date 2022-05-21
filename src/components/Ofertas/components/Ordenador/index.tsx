import { useState } from "react"
import { Container, Opt, Option, Options } from "./stylesOrdenador";
import { FaSortDown, FaSortUp, FaSortAlphaDown, FaSortNumericDown } from 'react-icons/fa'

import opcoes from './opcoes.json'

export type OpcoesOrdenador = "" | "Nome" | "Preço";

interface Props {
    ordenador: OpcoesOrdenador;
    setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>;
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
    const [aberto, setAberto] = useState(false)

    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.nome === ordenador)?.nome;

    return (
        <Container aberto={ordenador !== "" && true} onClick={() => setAberto(!aberto)} onBlur={() => setAberto(false)}>
            {/* <span>{nomeOrdenador || "Ordenar Por"}</span> */}
            <Opt>
                {nomeOrdenador ? nomeOrdenador === "Nome" ? <FaSortAlphaDown /> : <FaSortNumericDown /> : ''}
                {nomeOrdenador || "Ordenar Por"}
            </Opt>
            {aberto ? <FaSortDown size={20} /> : <FaSortUp size={20} />}
            <Options aberto={aberto}>
                {opcoes.map((opcao) => (
                    <Option key={opcao.valor} onClick={() => setOrdenador(opcao.nome as OpcoesOrdenador)}>
                        <Opt>
                            {opcao.valor ? opcao.valor === "nomeASC" ? <FaSortAlphaDown /> : <FaSortNumericDown /> : ''}
                            {opcao.nome}
                        </Opt>
                    </Option>
                ))
                }
            </Options>
        </Container>
    )
}