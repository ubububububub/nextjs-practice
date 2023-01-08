import Link from "next/link";

function Clients() {
  return (
    <div>
      <h2>The Clients Page</h2>
      <ul>
        <li>
          <Link href={{ pathname: "/clients/[id]", query: { id: "ub" } }}>
            UB
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/clients/[id]/[clientProjectId]",
              query: { id: "ja", clientProjectId: "ub" },
            }}
          >
            JA UB
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Clients;
