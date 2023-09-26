import { useRouter } from "next/router";
import useSWR from "swr";
import { StyledCard, StyledSection } from ".";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>Failed to load products</div>;

  return (
    <StyledSection>
      <StyledCard>
        <h1>{data?.name}</h1>
        <p>{data?.description}</p>
      </StyledCard>
    </StyledSection>
  );
}
