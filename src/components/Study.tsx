import React from 'react'
import * as dmv from 'dicom-microscopy-viewer'

import Description from './Description'
import { parseDate, parseTime } from '../valueUtils'

interface StudyProps {
  metadata: dmv.metadata.Study|dmv.metadata.SOPClass
}

/** React component representing a DICOM Study Information Entity. */
class Study extends React.Component<StudyProps> {
  render (): React.ReactNode {
    const attributes = [
      {
        name: 'Accession Number',
        value: this.props.metadata.AccessionNumber
      },
      {
        name: 'ID',
        value: this.props.metadata.StudyID
      },
      {
        name: 'Date',
        value: parseDate(this.props.metadata.StudyDate)
      },
      {
        name: 'Time',
        value: parseTime(this.props.metadata.StudyTime)
      }
    ]
    return <Description attributes={attributes} />
  }
}

export default Study
