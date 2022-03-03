import { screen, render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Test App", () => {
  test("add task and remove task", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Descrição da tarefa...");
    const addButton = screen.getByText("Adicionar");

    userEvent.type(input, "teste");
    userEvent.click(addButton);

    expect(screen.getByText("teste")).toBeVisible();

    const removeButton = screen.getByText("Remover da lista");
    userEvent.click(removeButton);

    expect(screen.queryByText("teste")).not.toBeInTheDocument();
  });

  test("add task and check task", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Descrição da tarefa...");
    const addButton = screen.getByText("Adicionar");

    userEvent.type(input, "teste check");
    userEvent.click(addButton);

    const labelTask = screen.getByText("teste check")
    expect(labelTask).toBeVisible();

    const checkInput = screen.getByRole('checkbox')
    userEvent.click(checkInput)

    expect(checkInput).toBeChecked()
    expect(labelTask).toHaveClass('checked')

  });
});
