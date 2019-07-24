import React from "react"
import { mount } from "enzyme"
import Link from "../Components/Link"

describe("Link", () => {
  const props = {
    title: "Test",
    href: "google.com",
    theme: {
      text: "white",
    },
  }
  const wrapper = mount(<Link {...props} />)

  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("should render its title", () => {
      expect(wrapper.text()).toEqual("Test")
    })
    it("should have the correct href", () => {
      expect(
        wrapper
          .find("a")
          .getDOMNode()
          .getAttribute("href"),
      ).toEqual("google.com")
    })
  })
})
