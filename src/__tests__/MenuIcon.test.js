import React from "react"
import { mount } from "enzyme"
import MenuIcon from "../Components/MenuIcon"

describe("Menu Icon", () => {
  const props = {
    open: false,
    onClick: jest.fn(),
    theme: {
      text: "white",
    },
  }
  const wrapper = mount(<MenuIcon {...props} />)

  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("should fire its click handler when clicked", () => {
      wrapper
        .find("div")
        .first()
        .simulate("click")
      expect(props.onClick.mock.calls.length).toBe(1)
    })
  })
})
