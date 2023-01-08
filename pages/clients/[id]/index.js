import { useRouter } from "next/router";

function ClientDetail() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "us", clientProjectId: "ub" },
    });
  }

  return (
    <div>
      <h2>The ClientDetail Page</h2>
      <button type="button" onClick={loadProjectHandler}>
        Load Project A
      </button>
    </div>
  );
}

export default ClientDetail;
