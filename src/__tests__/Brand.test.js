import React from "react"
import { mount } from "enzyme"
import Brand from "../components/Brand"

describe("Brand", () => {
  const props = {
    title: "Test",
    href: "google.com",
    theme: {
      text: "white",
    },
  }
  const wrapper = mount(<Brand {...props} />)

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
