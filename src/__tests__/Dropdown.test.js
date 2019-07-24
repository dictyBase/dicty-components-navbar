// @flow
import React from "react"
import { mount } from "enzyme"
import Dropdown from "../Components/Dropdown"

describe("Dropdown", () => {
  const props = {
    title: "Dicty Stock Center",
    links: [
      {
        name: "Link 1",
        href: "www.google.com",
      },
      {
        name: "Link 2",
        href: "www.google.com",
      },
      {
        name: "Link 3",
        href: "www.google.com",
      },
      {
        name: "Link 4",
        href: "www.google.com",
      },
    ],
    theme: {
      text: "white",
    },
  }
  let changeDropdown
  let wrapper

  beforeEach(() => {
    changeDropdown = jest.fn()
    wrapper = mount(
      <Dropdown
        items={props.links}
        title={props.title}
        changeDropdown={changeDropdown}
        index={0}
        open={false}
        theme={props.theme}
      />,
    )
  })
  afterEach(() => {
    wrapper.unmount()
  })
  it("should render without crashing", () => {
    expect(wrapper).toHaveLength(1)
  })
  it("should call changeDropdown() with its index when opened", () => {
    wrapper
      .find("li")
      .first()
      .simulate("click")
    expect(changeDropdown.mock.calls.length).toEqual(1)
    expect(changeDropdown.mock.calls[0][0]).toBe(0)
  })
  it("should call changeDropdown() with -1 when closed", () => {
    wrapper.setProps({ open: true })
    wrapper
      .find("li")
      .first()
      .simulate("click")
    expect(changeDropdown.mock.calls.length).toEqual(1)
    expect(changeDropdown.mock.calls[0][0]).toBe(-1)
  })
})
