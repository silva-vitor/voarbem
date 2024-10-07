'use client'

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { IoMdAirplane } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import { v4 } from "uuid";
import { useEffect, useState } from "react";

export default function Page({ params }) {
    const route = useRouter();
    const [empresas, setEmpresas] = useState([]);
    const [chaves, setchaves] = useState([]);
  

    const voos = JSON.parse(localStorage.getItem('voos')) || [];
    const dados = voos.find(item => item.id == params.id);
    const voo = dados || { nome: '', tipo_voo: '', identificador: '', chekin: '', embarque: '', origem: '', destino: '', empresa: '', preco: '' };

    useEffect(() => {
       //busca chave estrangeira
        setEmpresas(JSON.parse(localStorage.getItem('empresas')) || []);
        setchaves(JSON.parse(localStorage.getItem('aeroportos')) || []);
        
    }, []);

    function salvar(dados) {
        if (voo.id) {
            Object.assign(voo, dados);
        } else {
            dados.id = v4();
            voos.push(dados);
        }
        localStorage.setItem('voos', JSON.stringify(voos));
        return route.push('/voo');
    }

    return (
        <Pagina titulo="Voo">
            <Formik
                initialValues={voo}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="tipo-voo">
                            <Form.Label>Tipo de voo</Form.Label>
                            <Form.Control
                                type="text"
                                name="tipo_voo"
                                value={values.tipo_voo}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="identificador">
                            <Form.Label>Identificador</Form.Label>
                            <Form.Control
                                type="text"
                                name="identificador"
                                value={values.identificador}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="chekin">
                            <Form.Label>Check-in</Form.Label>
                            <Form.Control
                                type="text"
                                name="chekin"
                                value={values.chekin}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="embarque">
                            <Form.Label>Embarque</Form.Label>
                            <Form.Control
                                type="text"
                                name="embarque"
                                value={values.embarque}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="origem">
                            <Form.Label>Origem</Form.Label>
                            <Form.Control
                                as="select" // Change to select to choose an origem
                                name="origem"
                                value={values.origem}
                                onChange={handleChange}
                            >
                                <option value="">Selecione uma origem</option>
                                {chaves.map(origem => (
                                    <option key={origem.id} value={origem.id}>{origem.nome}</option> // Assuming 'nome' exists
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="destino">
                            <Form.Label>Destino</Form.Label>
                            <Form.Control
                                as="select" // Change to select to choose a destino
                                name="destino"
                                value={values.destino}
                                onChange={handleChange}
                            >
                                <option value="">Selecione um destino</option>
                                {chaves.map(destino => (
                                    <option key={destino.id} value={destino.id}>{destino.nome}</option> // Assuming 'nome' exists
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="empresa">
                            <Form.Label>Empresa</Form.Label>
                            <Form.Control
                                as="select" // Change to select to choose an empresa
                                name="empresa"
                                value={values.empresa}
                                onChange={handleChange}
                            >
                                <option value="">Selecione uma empresa</option>
                                {empresas.map(empresa => (
                                    <option key={empresa.id} value={empresa.id}>{empresa.nome}</option> // Assuming 'nome' exists
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="preco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control
                                type="number"
                                name="preco"
                                value={values.preco}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        
                        <div className="text-center">
                            <Button type="submit" variant="success">
                                <IoMdAirplane /> Salvar
                            </Button>
                            <Link href="/voo" className="btn btn-danger ms-2">
                                <TiArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
