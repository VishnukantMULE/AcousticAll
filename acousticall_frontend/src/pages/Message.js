import React from 'react'
import { connect } from 'react-redux'

export const Message = (props) => {
  return (
    <div>Message</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Message)