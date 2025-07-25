import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("render todo list title", () => {
  render(<App />);
  expect(screen.getByText("Todo List với Vite")).toBeInTheDocument();
});

test("render input và button", () => {
  render(<App />);
  expect(screen.getByPlaceholderText("Nhập việc cần làm")).toBeInTheDocument();
  expect(screen.getByText("Thêm")).toBeInTheDocument();
});

test("thêm task mới vào danh sách", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Nhập việc cần làm");
  const button = screen.getByText("Thêm");

  fireEvent.change(input, { target: { value: "Học Vite" } });
  fireEvent.click(button);

  expect(screen.getByText("Học Vite")).toBeInTheDocument();
});

test("không thêm task rỗng", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Nhập việc cần làm");
  const button = screen.getByText("Thêm");

  fireEvent.change(input, { target: { value: "" } });
  fireEvent.click(button);

  // Không có task nào được thêm
  expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
});

test("không thêm task chỉ có khoảng trắng", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Nhập việc cần làm");
  const button = screen.getByText("Thêm");

  fireEvent.change(input, { target: { value: "   " } });
  fireEvent.click(button);

  // Không có task nào được thêm
  expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
});

test("input được xóa sau khi thêm task", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Nhập việc cần làm");
  const button = screen.getByText("Thêm");

  fireEvent.change(input, { target: { value: "Test task" } });
  fireEvent.click(button);

  expect(input.value).toBe("");
});

test("xóa task khỏi danh sách", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Nhập việc cần làm");
  const button = screen.getByText("Thêm");

  fireEvent.change(input, { target: { value: "Task cần xóa" } });
  fireEvent.click(button);

  const deleteButton = screen.getByText("Xóa");
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Task cần xóa")).not.toBeInTheDocument();
});

test("thêm nhiều task", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Nhập việc cần làm");
  const button = screen.getByText("Thêm");

  // Thêm task đầu tiên
  fireEvent.change(input, { target: { value: "Task 1" } });
  fireEvent.click(button);

  // Thêm task thứ hai
  fireEvent.change(input, { target: { value: "Task 2" } });
  fireEvent.click(button);

  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();
});

test("xóa task đúng khi có nhiều task", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Nhập việc cần làm");
  const button = screen.getByText("Thêm");

  // Thêm hai tasks
  fireEvent.change(input, { target: { value: "Task 1" } });
  fireEvent.click(button);

  fireEvent.change(input, { target: { value: "Task 2" } });
  fireEvent.click(button);

  // Xóa task đầu tiên
  const deleteButtons = screen.getAllByText("Xóa");
  fireEvent.click(deleteButtons[0]);

  expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();
});
