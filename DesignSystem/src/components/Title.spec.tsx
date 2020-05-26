import React from "react"
import {render} from "@testing-library/react"
import Title from "xolvio_ui/components/Title";

test('it renders the subheading', () => {
  const {getByText} = render(<Title subheading={"My Subheading"} title={""}/>)
  getByText("My Subheading")
})

test('it renders the title', () => {
  const {getByText} = render(<Title subheading={"g"} title={"My Title"}/>)
  getByText("My Title")
})
