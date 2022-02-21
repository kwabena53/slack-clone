

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import ChannelMenuItem from "./ChannelMenuItem";
import MenuDropdown from "./MenuDropdown";



test("renders right MenuDropdown", () => {
  render(<MenuDropdown  children={<ChannelMenuItem name="new hires"/>} title="Channel" />);
  const textElement = screen.getByText(/Channel/i);
  expect(textElement).toBeInTheDocument();
});

test("matches MenuDropdown snapshot", () => {
  const component = renderer.create(<MenuDropdown  children={<ChannelMenuItem name="new hires"/>} title="Channel" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

