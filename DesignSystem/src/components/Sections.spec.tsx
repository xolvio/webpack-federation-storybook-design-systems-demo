import React from "react"
import {Section} from "xolvio_ui/components/Sections";
import {render} from "@testing-library/react"

test('Should render a Heading', () => {
  const {getByText} = render(<Section description={""} heading={"My Heading"} icon={""}/>)

  getByText("My Heading")
})


test('Should render a Description', () => {
  const {getByText} = render(<Section description={"My Description"} heading={""} icon={""}/>)

  getByText("My Description")
})
