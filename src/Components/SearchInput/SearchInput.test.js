import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import SearchInput from "./SearchInput";

test("renders search input ", () => {
  render(<SearchInput />);
  const textElement = screen.getByText(/Search Arizona State University/i);
  expect(textElement).toBeInTheDocument();
});

test("matches Search input snapshot", () => {
  const component = renderer.create(<SearchInput/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

