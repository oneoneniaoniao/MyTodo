import { useState } from "react";
import Layout from "../components/layout/Layout";
import TodoTable from "../components/TodoTable/TodoTable";
import SelectStatus from "../components/SelectStatus";
import TodoSummary from "../components/TodoSummary";

export default function Home() {
  const [statusFilter, setStatusFilter] = useState("");
  return (
    <Layout isIndex={true}>
      <TodoSummary />
      <SelectStatus
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <TodoTable statusFilter={statusFilter} />
    </Layout>
  );
}
