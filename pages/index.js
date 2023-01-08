import path from "path";
import fs from "fs/promises";
import Link from "next/link";

function Home(props) {
  const { products } = props;

  return (
    <div>
      <h1>Hello Next World!</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
          {/* <Link replace href="/portfolio">Portfolio</Link> */}
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>Product1</li>
        <li>Product2</li>
        <li>Product3</li>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  console.log("Re-Generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/about",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 100,
  };
}

export default Home;
