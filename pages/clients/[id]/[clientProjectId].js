import { useRouter } from "next/router";

function SelectedClientProject() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h2>The SelectedClientProject Page</h2>
      <div>{router.query.id}</div>
      <div>{router.query.clientProjectId}</div>
    </div>
  );
}

export default SelectedClientProject;
