/*
 *
 * HomePage
 *
 */

import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Typography,
} from "@strapi/design-system";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px 56px;

  h1 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.25;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  p {
    color: #ffffff;
    margin-bottom: 40px;
  }
`;

type Repo = {
  name: string;
  description: string;
  html_url: string;
};

const HomePage = () => {
  const [rows, setRows] = useState<Repo[]>([]);

  console.log(rows);

  useEffect(() => {
    fetch("https://api.github.com/users/evandrocalado/repos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRows(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      <h1>Repositórios do desenvolvedor</h1>
      <p>Uma lista dos repositórios do desenvolvedor.</p>

      <Table colCount={4} rowCount={10}>
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">Nome</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Descrição</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Url</Typography>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row) => (
            <Tr>
              <Td>
                <Typography textColor="neutral800">{row.name}</Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">
                  {row.description}
                </Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">
                  <a href={row.html_url} target="_blank">
                    {row.html_url}
                  </a>
                </Typography>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Wrapper>
  );
};

export default HomePage;
