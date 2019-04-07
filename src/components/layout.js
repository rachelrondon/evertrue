import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = () => (
  <div>
    <h1>Rachel</h1>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
