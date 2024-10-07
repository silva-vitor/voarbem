'use client'

import Link from "next/link"
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import { FaPlusCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagina from "../components/Pagina";

export default function Page() {

    const [passageiros, setPassageiros] = useState([])

    useEffect(() => {
        setPassageiros(JSON.parse(localStorage.getItem('passageiros')) || [])
    }, [])

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const dados = passageiros.filter(item => item.id != id)
            localStorage.setItem('passageiros', JSON.stringify(dados))
            setPassageiros(dados)
        }
    }

    return (
        <Pagina titulo="Passageiro">

            <Link href="/passageiro/form" className="btn btn-primary mb-3">
                <FaPlusCircle /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Cpf</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Data de nascimento</th>
                    </tr>
                </thead>
                <tbody>
                    {passageiros.map((item, i) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/passageiro/form/${item.id}`}>
                                    <FaRegEdit title="Editar" className="text-primary" />
                                </Link>
                                <MdDelete
                                    title="Excluir"
                                    className="text-danger"
                                    onClick={() => excluir(item.id)}
                                />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.cpf}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>{item['data-nascimento']}</td> 
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}
