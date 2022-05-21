import React from "react";

import { Container } from "./stylesBuscar";
import { CgSearch} from "react-icons/cg";

interface Props{
    busca:string;
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({busca, setBusca}: Props){
	return(
		<Container>
			<input 
				type="search"
				value={busca}
				placeholder="Buscar..."
				onChange={e => setBusca(e.target.value)} 
			/>
			<CgSearch size={20} color="#4C4D5E"/>
		</Container>
	);
}