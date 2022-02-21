import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import RightSider from "./RighSider";

const user = {
  id: 'jbsarfo',
  name: 'Jennifer Sarfo',
  url: 'https://randomuser.me/api/portraits/women/81.jpg',
  email: 'jbsarfo@asu.edu',
  workspaces:['EdPlus at ASU', 'ASU Community'],
  active: true
}

test("renders right sider", () => {
  
  render(<RightSider user={user} />);
  const textElement = screen.getByText(/Jennifer Sarfo/i);
  expect(textElement).toBeInTheDocument();
});

test("matches right sider snapshot", () => {
  const component = renderer.create(<RightSider user={user} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

