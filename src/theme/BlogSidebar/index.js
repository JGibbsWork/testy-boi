/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import {translate} from '@docusaurus/Translate';
export default function BlogSidebar({sidebar, row}) {
  if (sidebar.items.length === 0) {
    return null;
  }

  const authors = ['james', 'anthony', 'caitlin'];

  return (
   <div>
     <h3>See narratives from:</h3>
     <ul>
      {authors.map((author, idx) => (
          <li key = {idx}>
            <Link href = {`/blog/tags/${author}/`}>
              {author}
            </Link>
          </li>
      ))}
     </ul>
   </div>
  );
}




