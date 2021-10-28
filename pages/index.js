import styled from "@emotion/styled";
import { Layout } from "../components/layout/Layout";
import styles from "../styles/Home.module.css";

const Heading = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div>
      <Layout className={styles}>
        <h1 className={styles.alo}>Inicio</h1>
      </Layout>
    </div>
  );
}
