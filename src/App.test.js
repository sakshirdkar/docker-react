import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const customTextMatcher = (content, element) => {
    // Perform a case-insensitive search
    const textContent = element.textContent || "";
    return textContent.toLowerCase().includes(content.toLowerCase());
  };
  render(<App />);
  const linkElement = screen.getByText(/learn react/i, {
    matcher: customTextMatcher,
  });
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  const customTextMatcher = (content, element) => {
    // Perform a case-insensitive search
    const textContent = element.textContent || "";
    return textContent.toLowerCase().includes(content.toLowerCase());
  };
  render(<App />);
  const linkElement = screen.getByText(/learn react/i, {
    matcher: customTextMatcher,
  });
  expect(linkElement).toBeInTheDocument();
});
