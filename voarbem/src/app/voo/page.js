'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagina from "../components/Pagina";

export default function Page() {
    const [voos, setVoos] = useState([]);

    // Carrega os voos do localStorage ao carregar a página
    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem('voos')) || [];
        console.log(dados); // Para depuração
        setVoos(dados);
    }, []);

    // Função para excluir um voo
    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const dadosAtualizados = voos.filter(item => item.id !== id);
            localStorage.setItem('voos', JSON.stringify(dadosAtualizados));
            setVoos(dadosAtualizados);
        }
    }

    return (
        <Pagina titulo="Voos">
            <Link href="/voo/form" className="btn btn-primary mb-3">
                <FaPlusCircle /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tipo de Voo</th>
                        <th>Identificador</th>
                        <th>Check-In</th>
                        <th>Embarque</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {voos.map((item, i) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/voo/form/${item.id}`}>
                                    <FaRegEdit title="Editar" className="text-primary" />
                                </Link>
                                <MdDelete
                                    title="Excluir"
                                    className="text-danger"
                                    onClick={() => excluir(item.id)}
                                />
                            </td>
                            <td>{item.tipo_voo}</td>
                            <td>{item.identificador}</td>
                            <td>{item.checkin}</td> 
                            <td>{item.embarque}</td>
                            <td>{item.origem}</td>
                            <td>{item.destino}</td>
                            <td>{item.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    );
}
