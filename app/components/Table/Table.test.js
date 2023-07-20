import { render, screen } from "@testing-library/react";
import CustomTable from "./Table";

describe("CustomTable", () => {
  const headers = ["Name", "Age", "Gender"];
  const rows = [
    { Name: "Alice", Age: 25, Gender: "Female" },
    { Name: "Bob", Age: 30, Gender: "Male" },
  ];
  it("renders the headers and rows", () => {
    render(<CustomTable headers={headers} rows={rows} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Gender")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("Female")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("Male")).toBeInTheDocument();
  });
  it("renders a table with 3 columns and 2 rows", () => {
    render(<CustomTable headers={headers} rows={rows} />);
    const table = screen.getByRole("table");
    const rowsInTable = screen.getAllByRole("row");
    const columnsInTable = screen.getAllByRole("cell");
    expect(table).toBeInTheDocument();
    expect(rowsInTable.length).toBe(3); // 2 rows + 1 header row
    expect(columnsInTable.length).toBe(6); // 3 columns * 2 rows
  });
});
