import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Project } from '../../../payload-types'

import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import { formatDateTime } from '../../_utilities/formatDateTime'
import classes from './index.module.scss'

export const ProjectHero: React.FC<{
  project: Project
}> = ({ project }) => {
  const { id, categories, createdAt, meta: { description, image: metaImage } = {}, title } = project

  return (
    <Fragment>
      <Gutter className={classes.projectHero}>
        <div className={classes.content}>
          <div className={classes.leader}>
            <div className={classes.categories}>
              {createdAt && formatDateTime(createdAt)}
              &nbsp; &mdash; &nbsp;
              {categories?.map((category, index) => {
                if (typeof category === 'object' && category !== null) {
                  const { title: categoryTitle } = category

                  const titleToUse = categoryTitle || 'Untitled category'

                  const isLast = index === categories.length - 1

                  return (
                    <Fragment key={index}>
                      {titleToUse}
                      {!isLast && <Fragment>, &nbsp;</Fragment>}
                    </Fragment>
                  )
                }

                return null
              })}
            </div>
          </div>
          <h1 className={classes.title}>{title}</h1>
          <div>
            <p className={classes.description}>
              {`${description ? `${description} ` : ''}To edit this project, `}
              <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/projects/${id}`}>
                navigate to the admin dashboard
              </Link>
              .
            </p>
          </div>
        </div>
        <div className={classes.media}>
          <div className={classes.mediaWrapper}>
            {!metaImage && <div className={classes.placeholder}>No image</div>}
            {metaImage && typeof metaImage !== 'string' && (
              <Media fill imgClassName={classes.image} resource={metaImage} />
            )}
          </div>
          {metaImage && typeof metaImage !== 'string' && metaImage?.caption && (
            <RichText className={classes.caption} content={metaImage.caption} />
          )}
        </div>
      </Gutter>
    </Fragment>
  )
}
