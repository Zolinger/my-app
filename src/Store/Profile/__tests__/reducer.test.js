import { toggleUserNameAction } from "../actions";
import { profileReducer } from "../reducer";

describe("test profile reducer", () => {
  it("test toggleUserNameAction", () => {
    const received = profileReducer(undefined, toggleUserNameAction());

    expect(received).toMatchSnapshot();
  });
});
