'use client'

import { Table } from "react-bootstrap"
import Pagina from "../components/Pagina"
import Link from "next/link"
import { BsAirplaneFill } from "react-icons/bs";


export  default function Page(){
    return (
        <Pagina titulo="Aeroporto">
            <Link href="/aeroporto/create"
            className="btn btn-primary mb-3">
              < BsAirplaneFill/>  Novo
            </Link>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Sigla</th>
          <th>Uf</th>
          <th>cidade</th>
          <th>pais</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
          
        </tr>
       
      </tbody>
    </Table>

        </Pagina>
    
     )
}