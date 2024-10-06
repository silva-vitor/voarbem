'use client'

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import { CgExport } from "react-icons/cg";
import { CgPushLeft } from "react-icons/cg";;
export default function Page() {
    return (
        <Pagina titulo="Aeroporto">
            <Formik
                initialValues={{ nome: '', sigla: '', uf: '', cidade: '', pais: '' }}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={values.nome}
                                onChange={handleChange('nome')}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="sigla">
                            <Form.Label>Sigla</Form.Label>
                            <Form.Control
                                type="text"
                                name="sigla"
                                value={values.sigla}
                                onChange={handleChange('sigla')}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="uf">
                            <Form.Label>Uf</Form.Label>
                            <Form.Control
                                type="text"
                                name="uf"
                                value={values.uf}
                                onChange={handleChange('uf')}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cidade">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control
                                type="text"
                                name="cidade"
                                value={values.cidade}
                                onChange={handleChange('cidade')}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pais">
                            <Form.Label>Pais</Form.Label>
                            <Form.Control
                                type="text"
                                name="pais"
                                value={values.pais}
                                onChange={handleChange('pais')}
                            />

                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                            <CgExport />salvar</Button>

                            <Link href="/aeroporto"
                             className="btn btn-danger ms-3">
                               <CgPushLeft />Voltar</Link>
                        </div>


                    </Form>
                )}
            </Formik>

        </Pagina>

    )
}