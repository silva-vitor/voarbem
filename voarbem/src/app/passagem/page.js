'use client'

import Link from "next/link"
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import { FaPlusCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagina from "../components/Pagina";

export default function Page() {

    const [passagems, setPassagems] = useState([])

    useEffect(() => {
        setPassagems(JSON.parse(localStorage.getItem('passagems')) || [])
    }, [])

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const dados = passagems.filter(item => item.id != id)
            localStorage.setItem('passagems', JSON.stringify(dados))
            setPassagems(dados)
        }
    }

    return (
        <Pagina titulo="Passagem">

            <Link href="/passagem/form" className="btn btn-primary mb-3">
                <FaPlusCircle /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>id-voo</th>
                        <th>id-passageiro</th>
                        <th>Assento</th>
                        <th>preço</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {passagems.map((item, i) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/passagem/form/${item.id}`}>
                                    <FaRegEdit title="Editar" className="text-primary" />
                                </Link>
                                <MdDelete
                                    title="Excluir"
                                    className="text-danger"
                                    onClick={() => excluir(item.id)}
                                />
                            </td>
                            <td>{item['id-voo']}</td>
                            <td>{item['id-passageiro']}</td>
                            <td>{item.assento}</td>
                            <td>{item.preco}</td>
                             
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}
