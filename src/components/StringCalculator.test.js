import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StringCalculator from "./StringCalculator";

describe("StringCalculator Component", () => {
  test("renders without crashing", () => {
    render(<StringCalculator />);
    expect(screen.getByPlaceholderText("Enter numbers")).toBeInTheDocument();
  });

  test("displays the correct result for valid input", () => {
    render(<StringCalculator />);
    const input = screen.getByPlaceholderText("Enter numbers");
    const button = screen.getByText("Calculate");

    fireEvent.change(input, { target: { value: "1,2,3" } });
    fireEvent.click(button);

    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  test("handles new lines between numbers", () => {
    render(<StringCalculator />);
    const input = screen.getByPlaceholderText("Enter numbers");
    const button = screen.getByText("Calculate");

    fireEvent.change(input, { target: { value: "1\n2,3" } });
    fireEvent.click(button);

    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  test("supports different delimiters", () => {
    render(<StringCalculator />);
    const input = screen.getByPlaceholderText("Enter numbers");
    const button = screen.getByText("Calculate");

    fireEvent.change(input, { target: { value: "//;\n1;2" } });
    fireEvent.click(button);

    expect(screen.getByText("Result: 3")).toBeInTheDocument();
  });

  test("throws an error for negative numbers", () => {
    render(<StringCalculator />);
    const input = screen.getByPlaceholderText("Enter numbers");
    const button = screen.getByText("Calculate");

    fireEvent.change(input, { target: { value: "1,-2,3" } });
    fireEvent.click(button);

    expect(
      screen.getByText("negative numbers not allowed: -2")
    ).toBeInTheDocument();
  });

  test("throws an error listing all negative numbers", () => {
    render(<StringCalculator />);
    const input = screen.getByPlaceholderText("Enter numbers");
    const button = screen.getByText("Calculate");

    fireEvent.change(input, { target: { value: "1,-2,-3" } });
    fireEvent.click(button);

    expect(
      screen.getByText("negative numbers not allowed: -2,-3")
    ).toBeInTheDocument();
  });
});
