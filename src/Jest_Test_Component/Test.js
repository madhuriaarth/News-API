import { render, screen, waitFor } from "@testing-library/react";
import Articles from "../Articles_Component/Articles";

describe("users", () => {
  //  test('it displays a list of users',  () => {
  test("it displays a list of uers", async () => {
    render(<Articles />);

    const userName = await screen.findByText(
      "SpaceX VP says Starship is already winning commercial launch contracts    ",
      "2021-12-16T10:07:15.747Z"
    );
    expect(userName).toBeInTheDocument();
  });
});
