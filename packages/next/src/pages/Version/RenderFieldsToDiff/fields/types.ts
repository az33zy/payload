import type React from 'react'
import type { DiffMethod } from 'react-diff-viewer-continued'

import type { FieldPermissions } from 'payload/auth'
import { FieldMap, MappedField } from '@payloadcms/ui'
import type { I18n } from '@payloadcms/translations'

export type DiffComponents = Record<string, React.FC<Props>>

export type Props = {
  comparison: any
  diffMethod?: DiffMethod
  disableGutter?: boolean
  field: MappedField
  isRichText?: boolean
  locale?: string
  locales?: string[]
  permissions?: Record<string, FieldPermissions>
  version: any
  fieldMap: FieldMap
  i18n: I18n
  diffComponents: DiffComponents
}