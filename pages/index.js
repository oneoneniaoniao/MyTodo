import Layout from "../components/layout/Layout";
import TodoTable from "../components/TodoTable/TodoTable";
import SelectStatus from "../components/SelectStatus";

export default function Home() {
  return (
    <Layout isIndex={true}>
      <SelectStatus />
      <TodoTable />
    </Layout>
  );
}
