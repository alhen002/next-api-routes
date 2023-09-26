import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
`;
export const StyledCard = styled.article`
  padding-block: 2rem;
  padding-inline: 4rem;
  border-radius: 15px;
  border: 1px solid black;
`;

export default function ProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load products</div>;
  console.log(data);
  return (
    <div>
      <h1>Products</h1>
      <StyledSection>
        {data &&
          data.map((product) => (
            <StyledCard key={product.id}>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </StyledCard>
          ))}
      </StyledSection>
    </div>
  );
}
