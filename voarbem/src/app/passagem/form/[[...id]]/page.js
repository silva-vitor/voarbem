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
    const [voos, setVoos] = useState([]);
    const [passageiros, setPassageiros] = useState([]);

    const passagems = JSON.parse(localStorage.getItem('passagems')) || [];
    const dados = passagems.find(item => item.id == params.id);
    const passagem = dados || { 'id-voo': '', 'id-passageiro': '', assento: '', preco: '' };

    useEffect(() => {
        // Retrieve voos and passageiros from local storage
        setVoos(JSON.parse(localStorage.getItem('voos')) || []);
        setPassageiros(JSON.parse(localStorage.getItem('passageiros')) || []);
    }, []);

    function salvar(dados) {
        if (passagem.id) {
            Object.assign(passagem, dados);
        } else {
            dados.id = v4();
            passagems.push(dados);
        }
        localStorage.setItem('passagems', JSON.stringify(passagems));
        return route.push('/passagem');
    }

    return (
        <Pagina titulo="Passagem">
            <Formik
                initialValues={passagem}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="id-voo">
                            <Form.Label>Voo</Form.Label>
                            <Form.Control
                                as="select" // Change to select to choose a voo
                                name="id-voo"
                                value={values['id-voo']}
                                onChange={handleChange}
                            >
                                <option value="">Selecione um voo</option>
                                {voos.map(voo => (
                                    <option key={voo.id} value={voo.id}>{voo.nome}</option> // Displaying voo names
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="id-passageiro">
                            <Form.Label>Passageiro</Form.Label>
                            <Form.Control
                                as="select" // Change to select to choose a passageiro
                                name="id-passageiro"
                                value={values['id-passageiro']}
                                onChange={handleChange}
                            >
                                <option value="">Selecione um passageiro</option>
                                {passageiros.map(passageiro => (
                                    <option key={passageiro.id} value={passageiro.id}>{passageiro.nome}</option> // Displaying passageiro names
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="assento">
                            <Form.Label>Assento</Form.Label>
                            <Form.Control
                                type="text"
                                name="assento"
                                value={values.assento}
                                onChange={handleChange}
                            />
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
                            <Link href="/passagem" className="btn btn-danger ms-2">
                                <TiArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
