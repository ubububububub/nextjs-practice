import { useRouter } from "next/router";

function PortfolioDetail() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query.id);

  return (
    <div>
      <h2>The PortfolioDetail Page</h2>
    </div>
  );
}

export default PortfolioDetail;
