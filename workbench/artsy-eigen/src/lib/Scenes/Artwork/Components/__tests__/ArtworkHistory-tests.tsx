// @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
import { mount } from "enzyme"
import { Theme } from "palette"
import React from "react"
import { ArtworkHistory } from "../ArtworkHistory"

jest.unmock("react-relay")

describe("Artwork History", () => {
  it("renders everything", () => {
    const artworkHistoryInfo = {
      artwork: {
        " $refType": null,
        provenance: "vegas",
        exhibition_history: "this was in shows",
        literature: "bibliography",
      },
    }

    const component = mount(
      <Theme>
        <div>
          <ArtworkHistory
            // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
            artwork={artworkHistoryInfo.artwork}
          />
        </div>
      </Theme>
    )

    expect(component.text()).toContain("Provenance")
    expect(component.text()).toContain("Exhibition History")
    expect(component.text()).toContain("Bibliography")
  })

  it("renders only set keys", () => {
    const artworkHistoryInfo = {
      artwork: {
        " $refType": null,
        provenance: "vegas",
        exhibition_history: null,
        literature: "bibliography",
      },
    }

    const component = mount(
      <Theme>
        <div>
          <ArtworkHistory
            // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
            artwork={artworkHistoryInfo.artwork}
          />
        </div>
      </Theme>
    )
    expect(component.text()).toContain("Provenance")
    expect(component.text()).not.toContain("Exhibition History")
    expect(component.text()).toContain("Bibliography")
  })

  it("doesn't render without data", () => {
    const artworkHistoryInfo = {
      artwork: {
        " $refType": null,
        provenance: null,
        exhibition_history: null,
        literature: null,
      },
    }

    const component = mount(
      <Theme>
        <div>
          <ArtworkHistory
            // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
            artwork={artworkHistoryInfo.artwork}
          />
        </div>
      </Theme>
    )
    expect(component.text()).not.toContain("Provenance")
    expect(component.text()).not.toContain("Exhibition History")
    expect(component.text()).not.toContain("Bibliography")
  })
})
