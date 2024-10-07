'use client'

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { IoMdAirplane } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import { v4 } from "uuid";

export default function Page({ params }) {

    const route = useRouter()


    const passageiros = JSON.parse(localStorage.getItem('passageiros')) || []
    const dados = passageiros.find(item => item.id == params.id)
    const passageiro = dados || { nome: '', cpf: '', email: '', telefone: '', 'data-nascimento': '' }

    function salvar(dados) {
        if (passageiro.id) {
            Object.assign(passageiro, dados)
        } else {
            dados.id = v4()
            passageiros.push(dados)
        }
        localStorage.setItem('passageiros', JSON.stringify(passageiros))
        return route.push('/passageiro')
    }

    return (
        <Pagina titulo="Passageiro">
            <Formik
                initialValues={passageiro}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={values.nome}
                                onChange={handleChange('nome')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control
                                type="text"
                                name="cpf"
                                value={values.cpf}
                                onChange={handleChange('cpf')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange('email')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="telefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control
                                type="text"
                                name="telefone"
                                value={values.telefone}
                                onChange={handleChange('telefone')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="data-nascimento">
                            <Form.Label>Data de Nascimento</Form.Label>
                            <Form.Control
                                type="date"
                                name="data-nascimento"
                                value={values['data-nascimento']}
                                onChange={handleChange('data-nascimento')}
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button type="submit" variant="success">
                                <IoMdAirplane /> Salvar
                            </Button>
                            <Link href="/passageiro" className="btn btn-danger ms-2">
                                <TiArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    )
}
